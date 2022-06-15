import { PlanetsModel } from "./planets.model";

export interface PlanetsInfoModel {
    count: number;
    next: string;
    previous: Partial<string>;
    results: PlanetsModel[];
}

export interface PlanetsStateModel {
    planetsInfo: Partial<PlanetsInfoModel>;
    allPlanets: Partial<PlanetsModel[]>;
    selectedPlanet: Partial<PlanetsModel>;
}
