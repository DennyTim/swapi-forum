import {
    Action,
    createReducer,
    on,
} from "@ngrx/store";
import { PlanetsStateModel } from "../../models/planets-state.model";
import { loadPlanetsSuccess } from "../actions/planets.action";
import { setPlanets } from "../helpers/planets.helpers";

const initialState: PlanetsStateModel = {
    planetsInfo: {},
    allPlanets: [],
    selectedPlanet: {},
};

const reducer = createReducer(
    initialState,
    on(loadPlanetsSuccess, setPlanets),
);

export function planetsReducer(state: PlanetsStateModel | undefined, action: Action): PlanetsStateModel {
    return reducer(state, action);
}
