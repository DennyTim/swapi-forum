import { Injectable } from "@angular/core";
import {
    select,
    Store,
} from "@ngrx/store";
import { Observable } from "rxjs";
import { PlanetsModel } from "../models/planets.model";
import { MainState } from "../store";
import {
    loadPlanetById,
    loadPlanets,
} from "../store/actions/planets.action";
import {
    selectAllPlanets,
    selectSelectedPlanet,
} from "../store/selectors/planets.selector";

@Injectable({
    providedIn: "root",
})
export class PlanetsStateService {

    constructor(private store: Store<MainState>) {
    }

    public loadPlanets(): void {
        this.store.dispatch(loadPlanets());
    }

    public loadPlanetById(id: number): void {
        this.store.dispatch(loadPlanetById({ id }));
    }

    public getPlanets(): Observable<Partial<PlanetsModel[]>> {
        return this.store.pipe(select(selectAllPlanets));
    }

    public getPlanetById(): Observable<Partial<PlanetsModel>> {
        return this.store.pipe(select(selectSelectedPlanet));
    }
}
