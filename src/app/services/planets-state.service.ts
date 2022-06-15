import { Injectable } from "@angular/core";
import {
    select,
    Store,
} from "@ngrx/store";
import {
    map,
    Observable,
} from "rxjs";
import { PlanetsModel } from "../models/planets.model";
import { MainState } from "../store";
import {
    loadMorePlanets,
    loadPlanetById,
    loadPlanets,
} from "../store/actions/planets.action";
import { selectLoadingStatus } from "../store/selectors/loading.selector";
import {
    getPlanetNextUrl,
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

    public getMorePlanets(): void {
        this.store.dispatch(loadMorePlanets());
    }

    public getPlanets(): Observable<Partial<PlanetsModel[]>> {
        return this.store.pipe(select(selectAllPlanets));
    }

    public getPlanetById(): Observable<Partial<PlanetsModel>> {
        return this.store.pipe(select(selectSelectedPlanet));
    }

    public getNextUrl(): Observable<boolean> {
        return this.store.pipe(select(getPlanetNextUrl))
            .pipe(map((data: string) => !!data));
    }

    public getLoadingStatus(): Observable<boolean> {
        return this.store.pipe(select(selectLoadingStatus));
    }
}
