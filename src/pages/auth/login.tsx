import React from "react";
import withLayout from "@/hoc/withHeaderAndFooter";
import LoginForm from "@/components/login-form";

const Component = React.memo(() => {

    return <div className='w-full h-full flex justify-center align-middle'> <LoginForm/></div>
})

export default withLayout(Component)


