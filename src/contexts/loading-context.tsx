import React, { createContext, useState } from "react";

import Loading from "@/core/loading";

type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type LoadingProviderProps = {
  children: React.ReactNode;
};

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Loading />
      {children}
    </LoadingContext.Provider>
  );
};
