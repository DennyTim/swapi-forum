import { Injectable } from "@angular/core";
import {
    Actions,
    createEffect,
    ofType,
} from "@ngrx/effects";
import {
    select,
    Store,
} from "@ngrx/store";
import { cloneDeep } from "lodash";
import {
    catchError,
    EMPTY,
    exhaustMap,
    iif,
    map,
    of,
    withLatestFrom,
} from "rxjs";
import { PersonsModel } from "../../models/persons.model";
import { PlanetsInfoModel } from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";
import { PlanetsRequestService } from "../../services/planets-request.service";
import {
    loadMorePlanetsFailure,
    loadMorePlanetsSuccess,
    LoadPlanetByIdAction,
    loadPlanetByIdSuccess,
    loadPlanetsSuccess,
    PlanetsAction,
} from "../actions/planets.action";
import { MainState } from "../index";
import { getPlanetNextUrl } from "../selectors/planets.selector";

@Injectable()
export class PlanetsEffect {
    constructor(
        private actions$: Actions,
        private store: Store<MainState>,
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
            return this.planetsService.getPlanetById(id).pipe(
                catchError((error: Error) => EMPTY),
            );
        }),
        exhaustMap((planet: PlanetsModel) => {
            return this.planetsService.getPersonsByPlanet(planet.residents as unknown as string[])
                .pipe(
                    catchError((error: Error) => EMPTY),
                    map((residents: PersonsModel[]) => {
                        return loadPlanetByIdSuccess({
                            selectedPlanet: cloneDeep({
                                ...planet,
                                residents: residents as any,
                            }),
                        });
                    }),
                );
        }),
    ));

    loadMorePlanets$ = createEffect(() => this.actions$.pipe(
        ofType(PlanetsAction.loadMorePlanets),
        withLatestFrom(this.store.pipe(select(getPlanetNextUrl))),
        exhaustMap(([_, url]: [PlanetsAction.loadMorePlanets, string]) => {
            return iif(
                () => !!url,
                this.planetsService.getPlanetsByUrl(url)
                    .pipe(
                        catchError(() => EMPTY),
                        map((planetsInfo: PlanetsInfoModel) => {
                            return loadMorePlanetsSuccess({ planetsInfo });
                        }),
                    ),
                of(loadMorePlanetsFailure({ error: new Error(`Next url isn't exist`) })),
            );
        }),
    ));
}
