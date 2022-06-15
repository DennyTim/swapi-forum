import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    Observable,
    of,
    switchMap,
} from "rxjs";
import { environment } from "../../environments/environment";
import { PersonsModel } from "../models/persons.model";
import { PlanetsInfoModel } from "../models/planets-state.model";
import { PlanetsModel } from "../models/planets.model";

@Injectable({
    providedIn: "root",
})
export class PlanetsRequestService {
    readonly planetsUri = "/api/planets";

    constructor(private httpService: HttpClient) {
    }

    public getPlanets(): Observable<PlanetsInfoModel> {
        return this.httpService.get<PlanetsInfoModel>(`${environment.swapiUri}${this.planetsUri}`);
    }

    public getPlanetById(id: number): Observable<PlanetsModel> {
        return this.httpService.get<PlanetsModel>(`${environment.swapiUri}${this.planetsUri}/${id}/`);
    }

    public getPlanetsByUrl(url: string): Observable<PlanetsInfoModel> {
        return this.httpService.get<PlanetsInfoModel>(url);
    }

    public getPersonsByUrl(url: string): Observable<PersonsModel> {
        return this.httpService.get<PersonsModel>(url);
    }

    public getPersonsByPlanet(urls: string[]): Observable<PersonsModel[]> {
        const personsList: PersonsModel[] = [];
        const process = (): Observable<any> => {
            const url = urls.shift();
            if (url) {
                return this.getPersonsByUrl(url)
                    .pipe(switchMap((data: PersonsModel) => {
                        personsList.push(data);
                        return process();
                    }));
            } else {
                return of(personsList);
            }
        };
        return process();
    }
}
