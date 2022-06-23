import { Component } from "@angular/core";
import {
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { PasswordMatchingValidator } from "../../validators/password-matching.validator";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {

    constructor(private authService: AuthService) {
    }

    public name = new FormControl("", [
        Validators.required,
        Validators.minLength(3),
    ]);

    public email = new FormControl("", [
        Validators.required,
        Validators.email,
    ]);

    public password = new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    ]);

    public age = new FormControl("", [
        Validators.required,
        Validators.min(18),
        Validators.max(120),
    ]);

    public confirmPassword = new FormControl("", [
        Validators.required,
    ]);

    public phoneNumber = new FormControl("", [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
    ]);

    public registerForm = new FormGroup({
        name: this.name,
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        phoneNumber: this.phoneNumber,
    }, [
        PasswordMatchingValidator.match("password", "confirmPassword"),
    ]);

    public inSubmission: boolean = false;

    public register(): void {
        if (this.registerForm.invalid) {
            return;
        }

        const formData = new FormData();

        Object.entries(this.registerForm.value)
            .forEach(([key, value]) => {
                formData.append(key, value as string);
            });

        // TODO temporary call
        this.authService
            .register(formData)
            .subscribe((data) => console.log(data));
    }
}
