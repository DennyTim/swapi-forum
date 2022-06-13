import {
    createAction,
    props,
} from "@ngrx/store";
import { PlanetsInfoModel } from "../../models/planets-state.model";

export enum PlanetsAction {
    loadPlanets = '[Planets Page] Get Planets',
    loadPlanetsSuccess = '[Planets Page] Get Planets Success',
    loadPlanetsFailure = '[Planets Page] Get Planets Failure'
}

export const loadPlanets = createAction(
    PlanetsAction.loadPlanets
);

export const loadPlanetsSuccess = createAction(
    PlanetsAction.loadPlanetsSuccess,
    props<{ planetsInfo: PlanetsInfoModel }>()
);

export const loadPlanetsFailure = createAction(
    PlanetsAction.loadPlanetsSuccess,
    props<{ error: unknown }>()
);
