import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { HttpResponse } from "@/types/enum/HttpResponse";
import { showToast } from "@/utils/app";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3003",
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      const { message } = data as AxiosError;
      switch (status) {
        case HttpResponse.BAD_REQUEST:
          showToast("error", `Bad Request: ${message}`);
          break;
        case HttpResponse.UNAUTHORIZED:
          showToast("error", `Unauthorized: ${message}`);
          break;
        case HttpResponse.FORBIDDEN:
          showToast("error", `Forbidden: ${message}`);
          break;
        case HttpResponse.NOT_FOUND:
          showToast("error", `Not Found: ${message}`);
          break;
        case HttpResponse.INTERNAL_SERVER_ERROR:
          showToast("error", `Internal Server Error: ${message}`);
          break;
        default:
          showToast("error", `Error ${status}: ${message}`);
          break;
      }
    } else if (error.request) {
      showToast("error", `No response received: ${error.message}`);
    } else {
      showToast("error", `Request error: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

export default api;
