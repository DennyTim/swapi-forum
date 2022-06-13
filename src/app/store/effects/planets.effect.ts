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
import { PlanetsRequestService } from "../../services/planets-request.service";
import {
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

    loadPlanets$ = createEffect(
        () => this.actions$.pipe(
            ofType(PlanetsAction.loadPlanets),
            exhaustMap(() => {
                return this.planetsService.getPlanets().pipe(
                    map((planetsInfo: PlanetsInfoModel) => {
                        return loadPlanetsSuccess({ planetsInfo });
                    }),
                    catchError((error: Error) => EMPTY),
                );
            }),
        ),
    );
}
