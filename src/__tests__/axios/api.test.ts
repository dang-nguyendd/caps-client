import axios, { AxiosError } from "axios";
import MockAdapter from "axios-mock-adapter";

import api, { API_BASE_URL } from "@/axios";
import { HttpResponse } from "@/types/enum/HttpResponse";
import { showToast } from "@/utils/toast";

jest.mock("@/utils/toast");

describe("api", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(api);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should create axios instance with baseURL", () => {
    expect(api.defaults.baseURL).toEqual(API_BASE_URL);
  });

  it("should intercept response and return data", async () => {
    const data = { message: "success" };
    mock.onGet("/test").reply(HttpResponse.OK, data);

    const response = await api.get("/test");

    expect(response).toEqual(data);

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(HttpResponse.OK);
      expect(response).toEqual(data);
    }
  });

  it("should handle bad request error", async () => {
    const data = { message: "Bad Request" };
    mock.onGet("/test").reply(HttpResponse.BAD_REQUEST, data);

    await expect(api.get("/test")).rejects.toThrow();

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(HttpResponse.BAD_REQUEST);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `Bad Request: ${data.message}`
      );
    }
  });

  it("should handle unauthorized error", async () => {
    const data = { message: "Unauthorized" };
    mock.onGet("/test").reply(HttpResponse.UNAUTHORIZED, data);

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(HttpResponse.UNAUTHORIZED);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `Unauthorized: ${data.message}`
      );
    }
  });

  it("should handle forbidden error", async () => {
    const data = { message: "Forbidden" };
    mock.onGet("/test").reply(HttpResponse.FORBIDDEN, data);

    await expect(api.get("/test")).rejects.toThrow();

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(HttpResponse.FORBIDDEN);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `Forbidden: ${data.message}`
      );
    }
  });

  it("should handle not found error", async () => {
    const data = { message: "Not Found" };
    mock.onGet("/test").reply(HttpResponse.NOT_FOUND, data);

    await expect(api.get("/test")).rejects.toThrow();

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(HttpResponse.NOT_FOUND);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `Not Found: ${data.message}`
      );
    }
  });

  it("should handle internal server error", async () => {
    const data = { message: "Internal Server Error" };
    mock.onGet("/test").reply(HttpResponse.INTERNAL_SERVER_ERROR, data);

    await expect(api.get("/test")).rejects.toThrow();

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(HttpResponse.INTERNAL_SERVER_ERROR);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `Internal Server Error: ${data.message}`
      );
    }
  });

  it("should handle request error with no internet connection", async () => {
    const error = new Error("Network Error");
    mock.onGet("/test").networkError();

    await expect(api.get("/test")).rejects.toThrow();

    expect(showToast).toHaveBeenCalledWith(
      "error",
      `No response received: ${error.message}`
    );
  });

  it("should handle request error", async () => {
    mock.onGet("/test").networkErrorOnce();

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `Request error: ${error.message}`
      );
      expect(error.message).toEqual("Network Error");
    }
  });

  it("should handle no response error", async () => {
    mock.onGet("/test").timeoutOnce();

    try {
      await api.get("/test");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(showToast).toHaveBeenCalledWith(
        "error",
        `No response received: ${error.message}`
      );
      expect(error.message).toEqual("timeout of 0ms exceeded");
    }
  });
});
