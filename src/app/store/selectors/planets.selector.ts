import { createSelector } from "@ngrx/store";
import {
    PlanetsInfoModel,
    PlanetsStateModel,
} from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";
import { MainState } from "../index";

export const selectPlanetsState = (state: MainState): PlanetsStateModel => state.planetsState;

export const selectPlanetsList = createSelector(
    selectPlanetsState,
    (state: PlanetsStateModel): Partial<PlanetsInfoModel> => state.planetsInfo,
);

export const selectAllPlanets = createSelector(
    selectPlanetsState,
    (state: PlanetsStateModel): Partial<PlanetsModel[]> => state.allPlanets,
);

export const selectSelectedPlanet = createSelector(
    selectPlanetsState,
    (state: PlanetsStateModel): Partial<PlanetsModel> => state.selectedPlanet,
);

export const getPlanetNextUrl = createSelector(
    selectPlanetsList,
    (planetsInfo: Partial<PlanetsInfoModel>): string => planetsInfo?.next ?? "",
);
