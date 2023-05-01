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
        <main className="container h-screen bg-white px-2">
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </>
    );
  };
};

withLayout.displayName = "withLayout";

export default withLayout;
