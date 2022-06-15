import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import { ReactiveComponentModule } from "@ngrx/component";
import { PipesModule } from "../../pipes/pipes.module";
import { PlanetsResolver } from "../../services/planets.resolver";
import { PlanetsDetailComponent } from "./components/planets-detail/planets-detail.component";
import { PlanetsListComponent } from "./components/planets-list/planets-list.component";
import { PlanetsComponent } from "./planets.component";

const routes: Routes = [
    {
        path: "",
        component: PlanetsComponent,
        children: [
            {
                path: "",
                component: PlanetsListComponent,
                pathMatch: "full",
            },
            {
                path: ":id",
                component: PlanetsDetailComponent,
                resolve: { _: PlanetsResolver },
                pathMatch: "full",
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        ReactiveComponentModule,
        MatListModule,
        PipesModule,
        MatButtonModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        PlanetsComponent,
        PlanetsListComponent,
        PlanetsDetailComponent,
    ],
})
export class PlanetsModule {
}
