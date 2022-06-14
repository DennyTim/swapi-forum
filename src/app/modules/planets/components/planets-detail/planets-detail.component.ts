import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    OnInit,
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
export class PlanetsDetailComponent implements OnInit, DoCheck {
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

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        console.log("ngDoCheck");
    }
}
