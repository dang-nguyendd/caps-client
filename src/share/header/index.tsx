// components/Header.js
import React from 'react';

const Component = React.memo(() => {
    return (
        <header className="bg-primary p-4 md:p-6">
            <div className="container mx-auto">
                <h1 className="text-black text-2xl md:text-4xl font-bold">My App</h1>
            </div>
        </header>
    )
})

export default Component;