import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { PlanetsInfoModel } from "../models/planets-state.model";

@Injectable({
    providedIn: "root",
})
export class PlanetsRequestService {
    readonly planetsUri = "/api/planets";

    constructor(private httpService: HttpClient) {
    }

    public getPlanets(): Observable<PlanetsInfoModel> {
        return this.httpService.get<PlanetsInfoModel>(`${environment.swapiUri}${this.planetsUri}`)
    }
}
