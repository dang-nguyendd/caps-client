import React from "react";

import Footer from "@/shared/footer";
import Header from "@/shared/header";

export default function withSettings<P extends object>(
  SideBar: React.ComponentType<P>,
  Content: React.ComponentType<P>
): React.FC<P> {
  const WithSettings: React.FC<P> = (props: P) => {
    return (
      <div className="flex h-screen flex-col">
        <div className="flex flex-1">
          <SideBar {...props} />
          <main className="flex-1 bg-white">
            <Content {...props} />
          </main>
        </div>
      </div>
    );
  };

  WithSettings.displayName = `withLayout(${getDisplayName(SideBar)})`;

  return WithSettings;
}

function getDisplayName<P>(SideBar: React.ComponentType<P>) {
  return SideBar.displayName || SideBar.name || "WrappedComponent";
}
