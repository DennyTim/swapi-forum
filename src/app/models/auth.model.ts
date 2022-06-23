import { ReqFormPayload } from "./req-form-payload.model";

export interface AuthModel {
    accessToken: string;
    refreshToken: string;
    expiresTime: number;
    expiresRefreshTime: number;
    payload: Omit<ReqFormPayload, "age" | "password" | "confirmPassword">
}
