import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import { Observable } from "rxjs";
import { PlanetsModel } from "../../../../models/planets.model";
import { PlanetsStateService } from "../../../../services/planets-state.service";

@Component({
    selector: "app-planets-detail",
    templateUrl: "./planets-detail.component.html",
    styleUrls: ["./planets-detail.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsDetailComponent {
    public planetData$: Observable<Partial<PlanetsModel>> = this.planetsService.getPlanetById();
    public planetsParams: (keyof PlanetsModel)[] = [
        "rotation_period",
        "diameter",
        "climate",
        "gravity",
        "terrain",
        "population",
    ];

    constructor(private planetsService: PlanetsStateService) {
    }
}
