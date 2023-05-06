import React from "react";

import Footer from "@/shared/footer";
import Header from "@/shared/header";

export default function withSettings<P extends object>(
  Component: React.ComponentType<P>,
  Header: string
): React.FC<P> {
  const WithSettings: React.FC<P> = (props: P) => {
    return (
      <div className="flex h-screen flex-col">
        <header className="bg-blue px-8 py-4">
          <h1 className="text-3xl font-semibold text-white">{Header}</h1>
        </header>
        <div className="flex-1 bg-gray-100">
          <Component {...props} />
        </div>
        <footer className="bg-gray-200 px-8 py-4">
          <p className="text-sm text-gray-600">
            This is a sample health record page.
          </p>
        </footer>
      </div>
    );
  };

  WithSettings.displayName = `withLayout(${getDisplayName(Component)})`;

  return WithSettings;
}

function getDisplayName<P>(SideBar: React.ComponentType<P>) {
  return SideBar.displayName || SideBar.name || "WrappedComponent";
}
