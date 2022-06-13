import { Injectable } from "@angular/core";
import {
    Observable,
    of,
} from "rxjs";
import { PlanetsModel } from "../models/planets.model";

@Injectable({
    providedIn: "root",
})
export class PlanetsStateService {

    constructor() {
    }

    public loadPlanets(): void {
        // TODO: dispatch loading planets
    }

    public getPlanets(): Observable<Partial<PlanetsModel[]>> {
        // TODO: implement select for getting planets
        return of([undefined]);
    }
}
