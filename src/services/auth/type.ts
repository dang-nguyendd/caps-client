export namespace AuthNS {
  export type LoginRequest = {
    email: string;
    password: string;
  };

  export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
    dob: string;
    gender: string;
    confirmPassword: string;
  };

  export type LoginResponse = {
    access_token: string;
    refresh_token: string;
  };
}
