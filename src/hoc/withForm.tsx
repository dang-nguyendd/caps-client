import React from "react";

import Button from "@/core/button";

export default function withForm<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const WithForm: React.FC<P> = (props: P) => {
    return (
      <div className="mt-5 flex min-h-screen flex-col items-center justify-center py-5">
        <div className="mb-[40px] w-full text-center text-5xl font-bold tracking-normal text-blue">
          Health form
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
          <WrappedComponent {...props} />

          <div className="mt-10 flex w-full flex-col items-center justify-between sm:flex-row">
            <div>
              <Button onClick={() => {}} mode="secondary">
                Back
              </Button>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => {}} mode="primary">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  WithForm.displayName = `withForm(${getDisplayName(WrappedComponent)})`;

  return WithForm;
}

function getDisplayName<P>(WrappedComponent: React.ComponentType<P>) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
  );
}
