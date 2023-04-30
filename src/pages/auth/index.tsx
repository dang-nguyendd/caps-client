import React from "react";

import Login from "@/pages/auth/login";

const Component = React.memo(() => {
  return <Login />;
});

Component.displayName = "Auth";

export default Component;
