import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { clearToken } from "../utils/useLocalStorage";
export class BaseAxios {
  private axiosInstance: AxiosInstance;

  constructor(configInstance: AxiosRequestConfig) {
    this.axiosInstance = axios.create(configInstance);

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (err) => {
        this.handleUnAuthorized(err);
        return Promise.reject(err);
      }
    );

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getToken();

        if (token) {
          config.headers["user-id"] = `${token}`;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  getAxiosInstance() {
    return this.axiosInstance;
  }

  private handleUnAuthorized(err: AxiosError) {
    if (window) {
      if (err?.response?.status === 401) {
        clearToken();
        throw new Error((err.response?.data as AxiosError).message);
      }
    }
  }

  private getToken() {
    return JSON.parse(localStorage.getItem("user_id") ?? "{}")?.id;
  }
}
