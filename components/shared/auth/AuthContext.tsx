import { Dispatch, createContext } from "react";

import { AuthInitialState } from "@/components/shared/auth/AuthState";
import { ActionType } from "@/hooks/useCreateReducer";

export interface AuthContextProps {
  state: AuthInitialState;
  dispatch: Dispatch<ActionType<AuthInitialState>>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps>(undefined!);

export default AuthContext;
