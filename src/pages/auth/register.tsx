import React from "react";
import withLayout from "@/hoc/withHeaderAndFooter";
import RegisterForm from "@/components/register-form";

const Component = React.memo(() => {
    return <div className='w-full h-full flex justify-center align-middle'><RegisterForm/></div>
})

export default withLayout(Component)


