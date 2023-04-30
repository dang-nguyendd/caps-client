export class LocalStorageService {
    private static _instance: LocalStorageService;

    private constructor() {}

    public static getInstance(): LocalStorageService {
        if (!LocalStorageService._instance) {
            LocalStorageService._instance = new LocalStorageService();
        }
        return LocalStorageService._instance;
    }

    public getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    public setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
