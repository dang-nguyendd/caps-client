import React from "react";

const Component = React.memo(() => {
  return (
    <header className="bg-primary pb-4 md:p-6 fixed top-0 w-full">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          Welcome to Dengue Portal
        </h1>
      </div>
    </header>
  );
});

export default Component;
