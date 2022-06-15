import { cloneDeep } from "lodash";
import { PlanetsStateModel } from "../../models/planets-state.model";
import { PlanetsModel } from "../../models/planets.model";

const compose = <T>(...callback: Array<(arg: T) => T>) => (payload: T) => {
    return callback.reduceRight((prevResult, f) => f(prevResult), payload);
};

function generateRandomPlanet(): string {
    const randomNumber = Math.floor(Math.random() * (19 - 3 + 1)) + 2;
    return `https://starwars-visualguide.com/assets/img/planets/${randomNumber}.jpg`;
}

function populatePlanetsPhoto(planetsList: PlanetsModel[]) {
    if (!planetsList) {
        return [];
    }
    return planetsList.map((item: PlanetsModel) => {
        return cloneDeep({ ...item, imageUrl: generateRandomPlanet() });
    });
}

function generatePlanetId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function generateId(planetsList: PlanetsModel[]): PlanetsModel[] {
    if (!planetsList) {
        return [];
    }
    return planetsList.map((item: PlanetsModel) => {
        return cloneDeep({
            ...item,
            id: generatePlanetId(),
        });
    });
}

export const setPlanets = (
    state: PlanetsStateModel,
    { planetsInfo }: Pick<PlanetsStateModel, "planetsInfo">,
): PlanetsStateModel => {
    const payload = planetsInfo.results || [];
    return {
        ...state,
        planetsInfo: planetsInfo,
        allPlanets: compose(generateId, populatePlanetsPhoto)(payload),
    };
};

export const setSelectedPlanet = (
    state: PlanetsStateModel,
    { selectedPlanet }: Pick<PlanetsStateModel, "selectedPlanet">,
): PlanetsStateModel => {
    return {
        ...state,
        selectedPlanet: cloneDeep({
            ...selectedPlanet,
            imageUrl: generateRandomPlanet(),
        }),
    };
};

export const addMorePlanets = (
    state: PlanetsStateModel,
    { planetsInfo }: Pick<PlanetsStateModel, "planetsInfo">,
): PlanetsStateModel => {
    const payload = planetsInfo.results || [];
    return {
        ...state,
        planetsInfo: planetsInfo,
        allPlanets: [
            ...state.allPlanets,
            ...compose(generateId, populatePlanetsPhoto)(payload),
        ],
    };
};
