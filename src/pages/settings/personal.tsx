import React from "react";

import withLayout from "@/hoc/withLayout";

const Component = React.memo(() => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      Personal Info
    </div>
  );
});

Component.displayName = "Personal";

export default withLayout(Component);
