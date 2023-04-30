import React, { createContext, useContext, useState, useEffect } from "react";

import { LocalStorageService } from "@/services/local-storage";
import {
  AuthContextData,
  IAuthContextProps,
  User,
} from "@/types/context/with-auth-context";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = (): AuthContextData => useContext(AuthContext);

export const AuthProvider = (props: IAuthContextProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const access_token = LocalStorageService.getInstance().getItem("");
  }, []);

  const signIn = (user: User) => {
    setUser(user);
    //    TODO: add get user detail - baovo
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
