import React, { ReactNode, useContext, useMemo, useState } from "react";

type CateDetailContextContextValue = {};

type CateDetailContextContextType = {
  value?: any;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
};

export const CateDetailContextContext = React.createContext<
  CateDetailContextContextType | undefined
>(undefined);

export const useCateDetailContext = () => {
  const context = useContext(CateDetailContextContext);
  if (!context) {
    throw new Error(
      "useCateDetailContext can only be used within CateDetailContextProvider",
    );
  }
  return context;
};

const initialValue: CateDetailContextContextValue = {};

export const CateDetailContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [value, setValue] =
    useState<CateDetailContextContextValue>(initialValue);

  const contextValue = useMemo(() => ({ value, setValue }), [value]);

  return (
    <CateDetailContextContext.Provider value={contextValue}>
      {children}
    </CateDetailContextContext.Provider>
  );
};
