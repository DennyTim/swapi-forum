import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";

@Component({
    selector: "app-planets",
    templateUrl: "./planets.component.html",
    styleUrls: ["./planets.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsComponent {
}
