import {
    createAction,
    props,
} from "@ngrx/store";
import { PlanetsInfoModel } from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";

export enum PlanetsAction {
    loadPlanets = '[Planets Page] Get Planets',
    loadPlanetsSuccess = '[Planets Page] Get Planets Success',
    loadPlanetsFailure = '[Planets Page] Get Planets Failure',
    loadPlanetById = '[Planet Detail Page] Get Planet by Id',
    loadPlanetByIdSuccess = '[Planet Detail Page] Get Planet by Id Success',
    loadPlanetByIdFailure = '[Planet Detail Page] Get Planet by Id Failure',
    loadMorePlanets = '[Planet Page] Get More Planets',
    loadMorePlanetsSuccess = '[Planet Page] Get More Planets Success',
    loadMorePlanetsFailure = '[Planet Page] Get More Planets Failure'
}

export interface LoadPlanetByIdAction {
    type: PlanetsAction.loadPlanetById;
    id: number;
}

export const loadPlanets = createAction(
    PlanetsAction.loadPlanets
);

export const loadMorePlanets = createAction(
    PlanetsAction.loadMorePlanets
)

export const loadPlanetsSuccess = createAction(
    PlanetsAction.loadPlanetsSuccess,
    props<{ planetsInfo: PlanetsInfoModel }>()
);

export const loadPlanetsFailure = createAction(
    PlanetsAction.loadPlanetsFailure,
    props<{ error: unknown }>()
);

export const loadPlanetById = createAction(
    PlanetsAction.loadPlanetById,
    props<Pick<LoadPlanetByIdAction, 'id'>>()
);

export const loadPlanetByIdSuccess = createAction(
    PlanetsAction.loadPlanetByIdSuccess,
    props<{ selectedPlanet: PlanetsModel }>()
)

export const loadPlanetByIdFailure = createAction(
    PlanetsAction.loadPlanetByIdFailure,
    props<{ error: unknown }>()
)

export const loadMorePlanetsSuccess = createAction(
    PlanetsAction.loadMorePlanetsSuccess,
    props<{ planetsInfo: PlanetsInfoModel }>()
)

export const loadMorePlanetsFailure = createAction(
    PlanetsAction.loadMorePlanetsFailure,
    props<{ error: unknown }>()
)
