import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import {
    Actions,
    ofType,
} from "@ngrx/effects";
import {
    Observable,
    of,
    switchMap,
} from "rxjs";
import { PlanetsModel } from "../models/planets.model";
import { PlanetsAction } from "../store/actions/planets.action";
import { PlanetsStateService } from "./planets-state.service";

@Injectable({
    providedIn: "root",
})
export class PlanetsResolver implements Resolve<PlanetsModel | undefined> {
    constructor(
        private planetsStateService: PlanetsStateService,
        private actions$: Actions,
    ) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PlanetsModel | undefined> {
        return this.planetsStateService.getPlanets()
            .pipe(
                switchMap((planets: Partial<PlanetsModel[]>) => {
                    const planetsId: number = +route.params["id"];
                    if (planets?.length === 0) {
                        this.planetsStateService.loadPlanetById(planetsId);
                        return this.actions$.pipe(
                            ofType(PlanetsAction.loadPlanetByIdSuccess),
                        );
                    } else {
                        return of(planets[planetsId]);
                    }
                }),
            );
    }
}
