import "@/styles/globals.css";
import { useContext, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { LoadingContext } from "@/contexts/loading-context";
import ToastContainer from "@/core/toast-container";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, setIsLoading]);

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className={inter.className}>
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
