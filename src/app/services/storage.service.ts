import {
    DOCUMENT,
    isPlatformBrowser,
} from "@angular/common";
import {
    Inject,
    Injectable,
    PLATFORM_ID,
} from "@angular/core";

export class SerializationError extends Error {
    override message: string = "The storage is currently localStorage, where data must be serialized, and the provided data cannot be serialized.";
}

@Injectable({
    providedIn: "root",
})
export class StorageService {
    private readonly storage: Storage | undefined;
    private readonly JSONParser: JSON | undefined;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        if (isPlatformBrowser(this.platformId)) {
            this.storage = this.document.defaultView?.localStorage;
            this.JSONParser = this.document.defaultView?.JSON;
        }
    }

    public get<T>(key: string): T | undefined {
        if (!this.storage || !this.JSONParser) {
            throw new Error(`This service isn't compatible to server platform`);
        }
        const payload = this.storage.getItem(key);
        let parsedData: T | undefined;
        if (payload !== undefined && payload !== null) {
            try {
                parsedData = this.JSONParser.parse(payload) as T;
            } catch (error) {
                throw new SyntaxError(`This payload weren't parsed`);
            }
        }
        return parsedData;
    }

    public set<T>(key: string, payload: T): void {
        if (!this.storage || !this.JSONParser) {
            throw new Error(`This service isn't compatible to server platform`);
        }
        let serializedData: string | null = null;
        const dataPrototype = Object.getPrototypeOf(payload);
        if (
            typeof payload === "object"
            && payload !== null
            && !Array.isArray(payload)
            && !(dataPrototype === Object.prototype || dataPrototype === null)
        ) {
            throw new SerializationError();
        }

        try {
            serializedData = this.JSONParser.stringify(payload);
        } catch (error) {
            throw new TypeError(`This type isn't compatible for serialization`);
        }

        try {
            this.storage.setItem(key, serializedData);
        } catch (error) {
            throw new DOMException(`Operation for setting data is failed`);
        }
    }

    public delete(key: string): boolean {
        if (!this.storage) {
            throw new Error(`This service isn't compatible to server platform`);
        }
        this.storage.removeItem(key);
        return !this.storage.getItem(key);
    }

    public clear(): void {
        if (!this.storage) {
            throw new Error(`This service isn't compatible to server platform`);
        }
        this.storage.clear();
    }
}
