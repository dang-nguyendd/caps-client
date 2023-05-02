import React from "react";

const Component = React.memo(() => {
  return (
    <footer
      data-testid="footer"
      className="fixed bottom-0 w-full bg-orange p-4 md:p-6"
    >
      <div className="container mx-auto">
        <p className="text-sm text-white md:text-base">
          © {new Date().getFullYear()} DICA. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

Component.displayName = "Footer";

export default Component;
