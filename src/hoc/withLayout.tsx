import React from "react";

import { LoadingProvider } from "@/contexts/loading-context";
import Footer from "@/shared/footer";
import Header from "@/shared/header";

export default function withLayout<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const WithLayout: React.FC<P> = (props: P) => {
    return (
      <>
        <Header />
        <main
          data-testid="wrapped-component"
          className=" m-0 h-screen w-screen bg-white px-2"
        >
          <LoadingProvider>
            <WrappedComponent {...props} />
          </LoadingProvider>
        </main>
        <Footer />
      </>
    );
  };

  WithLayout.displayName = `withLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
}

function getDisplayName<P>(WrappedComponent: React.ComponentType<P>) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
  );
}
