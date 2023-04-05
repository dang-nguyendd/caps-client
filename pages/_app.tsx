import "@/styles/globals.css";
import React, { ReactElement, useState } from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import BaseLayout from "@/components/layouts/BaseLayout";
import AppErrorFallback from "@/components/shared/AppErrorFallback";
import { API_BASE_URL } from "@/constants/api";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

interface CustomAppProps extends AppProps {
  err: Error;
  Component: Page;
}

export default function App({
  Component,
  pageProps,
  router,
  err,
}: CustomAppProps) {
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  const getLayout =
    Component.getLayout ||
    ((page: ReactElement) => <BaseLayout>{page}</BaseLayout>);

  const handleOnError = (error: Error, info: React.ErrorInfo) => {
    setErrorInfo(info);
  };

  const handleFallbackRender = (fallbackProps: {
    error: Error;
    resetErrorBoundary: () => void;
  }) => {
    return (
      <AppErrorFallback
        error={fallbackProps.error}
        resetErrorBoundary={fallbackProps.resetErrorBoundary}
        errorInfo={errorInfo}
      />
    );
  };

  const client = new ApolloClient({
    uri: API_BASE_URL,
    ssrMode: true,
    cache: new InMemoryCache(),
  });

  return (
    <React.Fragment>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ApolloProvider client={client}>
        <ErrorBoundary
          onError={handleOnError}
          fallbackRender={handleFallbackRender}
        >
          {getLayout(<Component {...pageProps} err={err} />)}
        </ErrorBoundary>
      </ApolloProvider>
    </React.Fragment>
  );
}
