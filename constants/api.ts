import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { HttpResponse } from "@/types/enum/HttpResponse";

export const API_BASE_URL = "http://localhost:8000";

// AUTH MODULE
export const AUTH_ROUTES = {
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  LOGIN: `${API_BASE_URL}/auth/login`,
};

// Create axios instance with default headers and interceptor
export const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === HttpResponse.WRONG_CREDENTIAL) {
        // Handle unauthorized error
        // For example, redirect to login page
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
