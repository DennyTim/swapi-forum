import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
    map,
    Observable,
    pluck,
} from "rxjs";

@Component({
    selector: "app-error-page",
    templateUrl: "./error-page.component.html",
    styleUrls: ["./error-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent implements OnInit {
    public errorMessage$?: Observable<string>;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.errorMessage$ = this.route.data.pipe(
            pluck("message"),
            map((message: string) => message || this.route.snapshot.data["message"]),
        );
    }
}
