import React from "react";
import withLayout from "@/hoc/withHeaderAndFooter";
import Login from "@/pages/auth/login";

const Component = React.memo(() => {
    return <>
        <Login/>
    </>
})

export default Component


