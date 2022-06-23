import { NgModule } from "@angular/core";
import {
    ExtraOptions,
    PreloadAllModules,
    RouterModule,
    Routes,
} from "@angular/router";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { AuthModule } from "./modules/auth/auth.module";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/planets",
        pathMatch: "full",
    },
    {
        path: "planets",
        loadChildren: () => import("./modules/planets/planets.module").then(m => m.PlanetsModule),
    },
    {
        path: "auth",
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
    },
    {
        path: "**",
        redirectTo: "/not-found",
    },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: {
            message: '404 - Page not found'
        }
    }
];

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
};

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routerConfig)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
