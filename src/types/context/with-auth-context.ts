import { ReactNode } from "react";

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface AuthContextData {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

export interface IAuthContextProps {
  children: ReactNode;
}
