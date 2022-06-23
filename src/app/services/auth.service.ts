import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthModel } from "../models/auth.model";

@Injectable({
    providedIn: "root",
})
export class AuthService {

    constructor(private httpService: HttpClient) {
    }

    public register(payload: FormData): Observable<{ message: string }> {
        return this.httpService.post<{ message: string }>(`http://localhost:4200/register`, payload);
    }

    public login(payload: FormData): Observable<AuthModel> {
        return this.httpService.post<AuthModel>(`http://localhost:4200/login`, payload);
    }
}
