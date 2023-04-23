export interface Route {
  path: string;
  as: string;
}

export enum RoutePath {
  HOME = "/",
  SIGN_IN = "/signin",
  SIGN_UP = "/signup",
  CREATE_ACCOUNT = "/signup/create-account",
}

export const Routes = {
  HOME: { path: RoutePath.HOME, as: "/" },
  SIGN_IN: { path: RoutePath.SIGN_IN, as: "/signin" },
  SIGN_UP: { path: RoutePath.SIGN_UP, as: "/signup" },
  CREATE_ACCOUNT: {
    path: RoutePath.CREATE_ACCOUNT,
    as: "/signup/create-account",
  },
};
