import React from "react";

const Component = React.memo(() => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      Health Info
    </div>
  );
});

Component.displayName = "Health";

export default Component;
