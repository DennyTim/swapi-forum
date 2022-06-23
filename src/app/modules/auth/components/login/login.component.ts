import { Component } from "@angular/core";
import {
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {

    public email = new FormControl("", [
        Validators.required,
        Validators.email,
    ]);

    public password = new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    ]);

    public loginForm = new FormGroup({
        email: this.email,
        password: this.password,
    });

    public inSubmission: boolean = false;

    constructor(private authService: AuthService) {
    }

    public login(): void {
        if (this.loginForm.invalid) {
            return;
        }

        const formData = new FormData();

        Object.entries(this.loginForm.value)
            .forEach(([key, value]) => {
                formData.append(key, value as string);
            });

        // TODO temporary call
        this.authService
            .login(formData)
            .subscribe((data) => console.log(data));
    }
}
