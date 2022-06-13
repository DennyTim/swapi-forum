import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import { Observable } from "rxjs";
import { PlanetsModel } from "../../../../models/planets.model";
import { PlanetsStateService } from "../../../../services/planets-state.service";

@Component({
    selector: "app-planets-list",
    templateUrl: "./planets-list.component.html",
    styleUrls: ["./planets-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsListComponent implements OnInit {
    public allPlanets$?: Observable<Partial<PlanetsModel[]>>;

    constructor(private planetsService: PlanetsStateService) {
    }

    ngOnInit(): void {
        this.planetsService.loadPlanets();
        this.allPlanets$ = this.planetsService.getPlanets();
    }

}
