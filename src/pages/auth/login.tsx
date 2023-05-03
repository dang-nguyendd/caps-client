import React, {useContext} from "react";
import LoginForm from "@/components/login-form";
import withLayout from "@/hoc/withLayout";
import {LoadingContext} from "@/contexts/loading-context";

const Component = React.memo((props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoginForm />
    </div>
  );
});

Component.displayName = "Login";

export default withLayout(Component);
