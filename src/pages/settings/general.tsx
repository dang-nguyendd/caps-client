import React from "react";

import withSettings from "@/hoc/withSettings";

const Component = React.memo(() => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      General Info
    </div>
  );
});

Component.displayName = "General";

export default withSettings(Component, "General Settings");
