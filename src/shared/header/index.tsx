import React from "react";

import Link from "next/link";

const Component = React.memo(() => {
  return (
    <header
      data-testid="header"
      className="fixed top-0 w-full bg-orange pb-4 md:p-6"
    >
      <div className="container mx-auto">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Dengue Intelligent Chatbot Assistance
          </h1>
        </Link>
      </div>
    </header>
  );
});

Component.displayName = "Header";

export default Component;
