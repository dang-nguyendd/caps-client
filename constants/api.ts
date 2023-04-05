import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const API_BASE_URL = "http://localhost:8000";

// AUTH MODULE
export const AUTH_ROUTES = {
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  SIGNIN: `${API_BASE_URL}/auth/signin`
};


// Create axios instance with default headers and interceptor
export const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json"
    }
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // Handle unauthorized error
        // For example, redirect to signin page
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
