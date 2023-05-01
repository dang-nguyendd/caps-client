import React from "react";

import RegisterForm from "@/components/register-form";
import withLayout from "@/hoc/withHeaderAndFooter";

const Component = React.memo(() => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <RegisterForm />
    </div>
  );
});

Component.displayName = "Register";
export default withLayout(Component);
