import React from "react";

import SettingSideBar from "@/components/settings";
import withSettings from "@/hoc/withSettings";

const Component = React.memo(() => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      Personal Info
    </div>
  );
});

Component.displayName = "Personal";

export default withSettings(SettingSideBar, Component);
