import React from "react";

import Footer from "@/shared/footer";
import Header from "@/shared/header";
import {LoadingProvider} from "@/contexts/loading-context";

export default function withLayout<P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P> {
    const WithLayout: React.FC<P> = (props: P) => {
        return (<>
                <Header/>
                <main
                    data-testid="wrapped-component"
                    className=" h-screen w-screen m-0 bg-white px-2"
                >
                    <LoadingProvider>
                        <WrappedComponent {...props} />
                    </LoadingProvider>
                </main>
                <Footer/>
            </>
        );
    };

    WithLayout.displayName = `withLayout(${getDisplayName(WrappedComponent)})`;

    return WithLayout;
}

function getDisplayName<P>(WrappedComponent: React.ComponentType<P>) {
    return (
        WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
    );
}
