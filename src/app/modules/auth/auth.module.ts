import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
    FormsModule,
    ReactiveFormsModule,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { NgxMaskModule } from "ngx-mask";
import { AuthComponent } from "./auth.component";
import { InputComponent } from "./components/input/input.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
    declarations: [
        AuthComponent,
        InputComponent,
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        RouterModule.forChild([
            {
                path: "",
                component: AuthComponent,
                children: [
                    {
                        path: "register",
                        component: RegisterComponent,
                        pathMatch: "full",
                    },
                    {
                        path: "login",
                        component: LoginComponent,
                        pathMatch: "full",
                    },
                ],
            },
        ]),
        MatButtonModule,
    ],
})
export class AuthModule {
}
