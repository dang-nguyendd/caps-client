import { LocalStorageService } from "@/services/local-storage";

describe("LocalStorageService", () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    localStorageService = LocalStorageService.getInstance();
    localStorage.clear();
  });

  it("should set and get an item", () => {
    const key = "foo";
    const value = "bar";
    localStorageService.setItem(key, value);
    expect(localStorageService.getItem(key)).toBe(value);
  });

  it("should remove an item", () => {
    const key = "foo";
    const value = "bar";
    localStorageService.setItem(key, value);
    localStorageService.removeItem(key);
    expect(localStorageService.getItem(key)).toBeNull();
  });

  it("should clear all items", () => {
    localStorageService.setItem("foo", "bar");
    localStorageService.setItem("baz", "qux");
    localStorageService.clear();
    expect(localStorageService.getItem("foo")).toBeNull();
    expect(localStorageService.getItem("baz")).toBeNull();
  });
});
