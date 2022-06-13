import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import { PlanetsStateService } from "../../../../services/planets-state.service";

@Component({
    selector: "app-planets-list",
    templateUrl: "./planets-list.component.html",
    styleUrls: ["./planets-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsListComponent implements OnInit {
    public readonly allPlanets$ = this.planetsService.getPlanets();

    constructor(private planetsService: PlanetsStateService) {
    }

    ngOnInit(): void {
        this.planetsService.loadPlanets();
    }

}
