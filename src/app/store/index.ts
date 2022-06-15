import { LoadingState } from "../models/loading.model";
import { PlanetsStateModel } from "../models/planets-state.model";
import { PlanetsEffect } from "./effects/planets.effect";
import { loadingReducer } from "./reducers/loading.reducer";
import { planetsReducer } from "./reducers/planets.reducer";

export interface MainState {
    planetsState: PlanetsStateModel,
    loadingState: LoadingState
}

export const mainReducer = {
    planetsState: planetsReducer,
    loadingState: loadingReducer
}

export const effectList = [ PlanetsEffect ]
