import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {showToast} from "@/utils/app";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3003',
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            const { status, data } = error.response;
            switch (status) {
                case 400:
                    showToast('error', `Bad Request`);
                    break;
                case 401:
                    showToast('error', `Unauthorized`);
                    break;
                case 403:
                    showToast('error', `Forbidden`);
                    break;
                case 404:
                    showToast('error', `Not Found`);
                    break;
                case 500:
                    showToast('error', `Internal Server Error`);
                    break;
                default:
                    showToast('error', `Error ${status}`);
                    break;
            }
        } else if (error.request) {
            showToast('error', `No response received: ${error.message}`);
        } else {
            showToast('error', `Request error: ${error.message}`);
        }

        return Promise.reject(error);
    }
);

export default api;