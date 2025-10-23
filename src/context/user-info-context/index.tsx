import React, { ReactNode, useContext, useMemo, useState } from "react";

type UserInfo = {
  username: string;
  email: string;
  isAuthor: boolean;
};

type UserInfoContextContextValue = {};

type UserInfoContextContextType = {
  value?: any;
  setValue?: React.Dispatch<React.SetStateAction<UserInfo>>;
};

export const UserInfoContextContext = React.createContext<
  UserInfoContextContextType | undefined
>(undefined);

export const useUserInfoContext = () => {
  const context = useContext(UserInfoContextContext);
  if (!context) {
    throw new Error(
      "useUserInfoContext can only be used within UserInfoContextProvider"
    );
  }
  return context;
};

const initialValue: UserInfoContextContextValue = {};

export const UserInfoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [value, setValue] = useState<UserInfoContextContextValue>(initialValue);

  const contextValue = useMemo(() => ({ value, setValue }), [value]);

  return (
    <UserInfoContextContext.Provider value={contextValue}>
      {children}
    </UserInfoContextContext.Provider>
  );
};
