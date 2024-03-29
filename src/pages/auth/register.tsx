import React from "react";

import RegisterForm from "@/components/register-form";
import withLayout from "@/hoc/withLayout";

const Component = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <RegisterForm />
    </div>
  );
};

Component.displayName = "Register";
export default withLayout(Component);
