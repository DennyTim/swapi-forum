import { createSelector } from "@ngrx/store";
import { PlanetsStateModel } from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";
import { MainState } from "../index";

export const selectPlanetsState = (state: MainState): PlanetsStateModel => state.planetsState;

export const selectAllPlanets = createSelector(
    selectPlanetsState,
    (state: PlanetsStateModel): Partial<PlanetsModel[]> => state.allPlanets,
);

export const selectSelectedPlanet = createSelector(
    selectPlanetsState,
    (state: PlanetsStateModel): Partial<PlanetsModel> => state.selectedPlanet,
);
