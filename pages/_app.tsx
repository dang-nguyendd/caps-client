import "@/styles/globals.css";
import React, { useState } from "react";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { appWithTranslation } from "next-i18next";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import AppErrorFallback from "@/components/shared/AppErrorFallback";
import AuthContext from "@/components/shared/auth/AuthContext";
import {
  AuthInitialState,
  initialState,
} from "@/components/shared/auth/AuthState";
import { useCreateReducer } from "@/hooks/useCreateReducer";

const inter = Inter({ subsets: ["latin"] });

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

interface CustomAppProps extends AppProps {
  err: Error;
  Component: Page;
}

function App({ Component, pageProps, router, err }: CustomAppProps) {
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  const handleOnError = (error: Error, info: React.ErrorInfo) => {
    setErrorInfo(info);
  };

  const authContextValue = useCreateReducer<AuthInitialState>({
    initialState,
  });

  const {
    state: { isAuthenticated },
    dispatch,
  } = authContextValue;

  const handleLogout = () => {
    // TODO: Implement Logout

    dispatch({ field: "isAuthenticated", value: false });

    dispatch({ field: "loading", value: false });
  };

  const queryClient = new QueryClient();

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

  return (
    <AuthContext.Provider
      value={{
        ...authContextValue,
        handleLogout,
      }}
    >
      <div className={inter.className}>
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
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary
            onError={handleOnError}
            fallbackRender={handleFallbackRender}
          >
            {<Component {...pageProps} err={err} />}
          </ErrorBoundary>
        </QueryClientProvider>
      </div>
    </AuthContext.Provider>
  );
}

export default appWithTranslation(App);
