export const CLIENT_BASE_URL = "http://localhost:3000";

export interface Route {
  path: string;
  as: string;
}

export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
  SIGN_UP = "/signup",
  CREATE_ACCOUNT = "/signup/create-account",
}

export const Routes = {
  HOME: { path: RoutePath.HOME, as: "/" },
  LOGIN: { path: RoutePath.LOGIN, as: "/login" },
  SIGN_UP: { path: RoutePath.SIGN_UP, as: "/signup" },
  CREATE_ACCOUNT: {
    path: RoutePath.CREATE_ACCOUNT,
    as: "/signup/create-account",
  },
};
