import { ErrorMessage } from "@/types/Error";
import { User } from "@/types/User";

export interface AuthInitialState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: ErrorMessage | null;
}

export const initialState: AuthInitialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};
