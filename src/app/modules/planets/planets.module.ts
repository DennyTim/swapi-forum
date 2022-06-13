import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import { PlanetsComponent } from "./planets.component";

const routes: Routes = [
    {
        path: "",
        component: PlanetsComponent,
    },
];

@NgModule({
    declarations: [
        PlanetsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
})
export class PlanetsModule {
}
