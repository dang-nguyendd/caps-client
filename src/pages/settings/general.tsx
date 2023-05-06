import React from "react";

import withLayout from "@/hoc/withLayout";

const Component = React.memo(() => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      General Info
    </div>
  );
});

Component.displayName = "General";

export default Component;
