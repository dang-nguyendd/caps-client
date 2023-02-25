import BaseLayout from "@/components/layouts/BaseLayout";

import { AppErrorFallback } from "@/components/shared/AppErrorFallback";
import { API_BASE_URL } from "@/constants";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { useState } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

interface CustomAppProps extends AppProps {
  err: any;
  Component: Page;
}

export default function App({
  Component,
  pageProps,
  router,
  err,
}: CustomAppProps) {
  const [errorInfo, setErrorInfo] = useState<any>();

  const getLayout =
    Component.getLayout ||
    ((page: React.ReactElement) => <BaseLayout>{page}</BaseLayout>);

  const client = new ApolloClient({
    uri: API_BASE_URL,
    ssrMode: true,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ToastContainer
        position="bottom-left"
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
          onError={(error, info) => {
            setErrorInfo(info);
          }}
          fallbackRender={(fallbackProps) => {
            return (
              <AppErrorFallback {...fallbackProps} errorInfo={errorInfo} />
            );
          }}
        >
          {getLayout(<Component {...pageProps} err={err} />)}
        </ErrorBoundary>
      </ApolloProvider>
    </>
  );
}
