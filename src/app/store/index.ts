import { PlanetsStateModel } from "../models/planets-state.model";
import { PlanetsEffect } from "./effects/planets.effect";
import { planetsReducer } from "./reducers/planets.reducer";

export interface MainState {
    planetsState: PlanetsStateModel
}

export const mainReducer = {
    planetsState: planetsReducer
}

export const effectList = [ PlanetsEffect ]
