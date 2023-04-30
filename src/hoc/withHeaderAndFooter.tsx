import React from 'react';
import Header from '../share/header';
import Footer from '../share/footer';

const withLayout = <P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {
        return (
            <>
                <Header />
                <main className="container mx-auto my-4 md:my-8 bg-white">
                    <WrappedComponent {...props} />
                </main>
                <Footer />
            </>
        );
    };
};

export default withLayout;