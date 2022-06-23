import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    Observable,
    of,
} from "rxjs";
import { ReqFormPayload } from "../models/req-form-payload.model";
import { StorageService } from "../services/storage.service";

@Injectable()
export class FakeAuthInterceptor implements HttpInterceptor {
    private accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiI2NTM0MzQzNC0zNDM0MjIxLTIzNDIzMiIsImlhdCI6MTUxNjIzOTAyMn0.15EUKWT_vaF4HB5GFknVSKzXdx5jQMpRu_eqfPJ8IXc";
    private refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiI2NTM0MzQzNC0zNDM0MjIxLTIzNDIzMiIsImlhdCI6MTUxNjIzOTAyMn0.15EUKWT_vaF4HB5GFknVSKzXdx5jQMpRu_eqfPJ8IXc";

    constructor(private storage: StorageService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (
            request.url === "http://localhost:4200/register"
            && request.body instanceof FormData
            && request.method === "POST"
        ) {
            const email = request.body.get("email");
            const payload = {
                email,
                name: request.body.get("name"),
                age: request.body.get("age"),
                password: request.body.get("password"),
                phoneNumber: request.body.get("phoneNumber"),
            };

            if (email && typeof email === "string") {
                this.storage.set(email, payload);
            }

            return of(new HttpResponse({ status: 200, body: { message: "completed" } }));
        }

        if (
            request.url === "http://localhost:4200/login"
            && request.body instanceof FormData
            && request.method === "POST"
        ) {
            const email = request.body.get("email");
            const password = request.body.get("password");
            let payload: ReqFormPayload | undefined;
            if (email && typeof email === "string") {
                payload = this.storage.get<ReqFormPayload>(email);
            }

            if (!payload) {
                return of(new HttpResponse({ status: 404, body: { message: "failed" } }));
            }

            if (payload.password !== password) {
                return of(new HttpResponse({ status: 401, body: { message: "failed" } }));
            }

            return of(
                new HttpResponse({
                    status: 200,
                    body: {
                        accessToken: this.accessToken,
                        refreshToken: this.refreshToken,
                        expiresTime: Date.now() + 604800000,
                        expiresRefreshTime: Date.now() + 7200000,
                        payload: {
                            email: payload.email,
                            name: payload.name,
                            phoneNumber: payload.phoneNumber,
                        }
                    }
                }),
            );
        }

        return next.handle(request);
    }
}
