import { Injectable } from "@angular/core";
import {
    Actions,
    createEffect,
    ofType,
} from "@ngrx/effects";
import {
    catchError,
    EMPTY,
    exhaustMap,
    map,
} from "rxjs";
import { PlanetsInfoModel } from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";
import { PlanetsRequestService } from "../../services/planets-request.service";
import {
    LoadPlanetByIdAction,
    loadPlanetByIdSuccess,
    loadPlanetsSuccess,
    PlanetsAction,
} from "../actions/planets.action";

@Injectable()
export class PlanetsEffect {
    constructor(
        private actions$: Actions,
        private planetsService: PlanetsRequestService,
    ) {
    }

    loadPlanets$ = createEffect(() => this.actions$.pipe(
        ofType(PlanetsAction.loadPlanets),
        exhaustMap(() => {
            return this.planetsService.getPlanets().pipe(
                catchError((error: Error) => EMPTY),
                map((planetsInfo: PlanetsInfoModel) => {
                    return loadPlanetsSuccess({ planetsInfo });
                }),
            );
        }),
    ));

    loadPlanetById$ = createEffect(() => this.actions$.pipe(
        ofType(PlanetsAction.loadPlanetById),
        exhaustMap(({ id }: LoadPlanetByIdAction) => {
            return this.planetsService.getPlanetById(id)
                .pipe(
                    catchError(() => EMPTY),
                    map((planet: PlanetsModel) =>
                        loadPlanetByIdSuccess({ selectedPlanet: planet }),
                    ),
                );
        }),
    ));
}
