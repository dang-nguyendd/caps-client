export interface Route {
  path: string;
  as: string;
}

export enum RoutePath {
  HOME = "/",
}

export const Routes = {
  HOME: { path: RoutePath.HOME, as: "/" },
};
