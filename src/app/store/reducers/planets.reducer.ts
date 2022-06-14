import {
    Action,
    createReducer,
    on,
} from "@ngrx/store";
import { PlanetsStateModel } from "../../models/planets-state.model";
import {
    loadPlanetByIdSuccess,
    loadPlanetsSuccess,
} from "../actions/planets.action";
import {
    setPlanets,
    setSelectedPlanet,
} from "../helpers/planets.helpers";

const initialState: PlanetsStateModel = {
    planetsInfo: {},
    allPlanets: [],
    selectedPlanet: {},
};

const reducer = createReducer(
    initialState,
    on(loadPlanetsSuccess, setPlanets),
    on(loadPlanetByIdSuccess, setSelectedPlanet),
);

export function planetsReducer(state: PlanetsStateModel | undefined, action: Action): PlanetsStateModel {
    return reducer(state, action);
}
