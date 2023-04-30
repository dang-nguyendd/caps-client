import React from "react";

import LoginForm from "@/components/login-form";
import withLayout from "@/hoc/withHeaderAndFooter";

const Component = React.memo(() => {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      {" "}
      <LoginForm />
    </div>
  );
});

export default withLayout(Component);
