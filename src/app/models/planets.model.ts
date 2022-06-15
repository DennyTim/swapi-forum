import { PersonsModel } from "./persons.model";

export interface PlanetsModel {
    id: string;
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: PersonsModel[];
    films: string;
    created: string;
    edited: string;
    url: string;
    imageUrl: string;
}
