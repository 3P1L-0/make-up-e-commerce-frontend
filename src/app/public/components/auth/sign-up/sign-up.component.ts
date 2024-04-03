import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppAuthService } from "src/app/global/services/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html"
})
export class AppSignUpComponent {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AppAuthService);

  public readonly _signUpForm: FormGroup;
}
