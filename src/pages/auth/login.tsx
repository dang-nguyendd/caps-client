import React, { useContext } from "react";

import LoginForm from "@/components/login-form";
import { LoadingContext } from "@/contexts/loading-context";
import withLayout from "@/hoc/withLayout";

const Component = React.memo((props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoginForm />
    </div>
  );
});

Component.displayName = "Login";

export default withLayout(Component);
