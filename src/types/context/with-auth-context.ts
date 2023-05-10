import { ReactNode } from "react";

type GenderType = "male" | "female" | "other";
type RoleType = string[];

export interface User {
  id: number;
  name: string;
  gender: GenderType;
  dob: string;
  age: number;
  email: string;
  roles: RoleType;
  firstLogin: boolean;
  createdAt: string;
}

export interface AuthContextData {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

export interface IAuthContextProps {
  children: ReactNode;
}
