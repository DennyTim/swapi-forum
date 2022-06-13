import { Injectable } from "@angular/core";
import {
    select,
    Store,
} from "@ngrx/store";
import { Observable } from "rxjs";
import { PlanetsModel } from "../models/planets.model";
import { MainState } from "../store";
import { loadPlanets } from "../store/actions/planets.action";
import { selectAllPlanets } from "../store/selectors/planets.selector";

@Injectable({
    providedIn: "root",
})
export class PlanetsStateService {

    constructor(private store: Store<MainState>) {
    }

    public loadPlanets(): void {
        this.store.dispatch(loadPlanets());
    }

    public getPlanets(): Observable<Partial<PlanetsModel[]>> {
        return this.store.pipe(select(selectAllPlanets));
    }
}
