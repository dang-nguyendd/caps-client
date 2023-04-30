import React from 'react';

const Component  = React.memo(() => {
    return (
        <footer className="bg-primary p-4 md:p-6 fixed bottom-0 w-full">
            <div className="container mx-auto">
                <p className="text-black text-sm md:text-base">
                    © {new Date().getFullYear()} My App. All rights reserved.
                </p>
            </div>
        </footer>
    );
})

export default Component;