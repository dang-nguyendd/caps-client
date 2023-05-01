import React from "react";

import Footer from "@/shared/footer";
import Header from "@/shared/header";

const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    return (
      <>
        <Header />
        <main className="container px-2 bg-white h-screen">
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </>
    );
  };
};

withLayout.displayName = "withLayout";

export default withLayout;
