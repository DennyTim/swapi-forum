import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import { ReactiveComponentModule } from "@ngrx/component";
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
        ],
    },
];

@NgModule({
    declarations: [
        PlanetsComponent,
        PlanetsListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        ReactiveComponentModule
    ]
})
export class PlanetsModule {
}
