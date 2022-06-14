import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import {
    ActivatedRoute,
    Router,
} from "@angular/router";
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

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private planetsService: PlanetsStateService,
    ) {
    }

    public ngOnInit(): void {
        this.planetsService.loadPlanets();
        this.allPlanets$ = this.planetsService.getPlanets();
    }

    public async handlePlanetDetails(planetUrl: string): Promise<void> {

        const planetParams = planetUrl
            .split("/")
            .filter(item => item);

        const id = Number(planetParams[planetParams.length - 1]);

        try {
            if (!id) {
                return Promise.reject(new Error(`Planet id wasn't retrieved`));
            }

            const isNavigated = await this.router.navigate(
                [`/planets/${id}`],
                { relativeTo: this.route },
            );

            if (!isNavigated) {
                return Promise.reject(new Error(`Current planet wasn't loaded`));

            }
            this.planetsService.loadPlanetById(id);
        } catch (err) {
            console.error(`This error occurred in routing process with following error: `, err);
        }
    }
}
