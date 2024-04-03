import { Component, inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "src/app/global/configs";
import { Credentials, CredentialsDTO } from "src/app/global/model/auth";
import { AppAuthService } from "src/app/global/services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html"
})
export class AppSignInComponent {
  private readonly _router = inject(Router);
  private readonly _authService = inject(AppAuthService);
  private readonly _formBuilder = inject(FormBuilder)

  public readonly signInForm: FormGroup;
  public wrongCredentials: boolean;
  public type: string;
  public hidden: boolean;

  constructor() {
    this.signInForm = this._formBuilder.group({
      username: new FormControl<string>(null, [Validators.required]),
      password: new FormControl<string>(null, [Validators.required])
    });

    this.wrongCredentials = false;
    this.type = "password";
    this.hidden = true;
  }

  public home() { this._router.navigate([PUBLIC_ROUTES.home]) }

  public signIn() {
    const creds = Object.assign(new CredentialsDTO(), this.signInForm.value);

    console.log(this.isFormInvalid())
    if (this.isFormInvalid()) return;

    this._authService.signIn(creds).subscribe(session => {
      if(!(this.wrongCredentials = !!session)) return;
      this._router.navigate([PRIVATE_ROUTES.home]).then();
    });
  }

  public isFormInvalid() {
    return !this.signInForm.valid
  }

  public toggleHidden() {
    this.type = (this.hidden = !this.hidden) ? "password" : "text";
    return this.hidden
  }
}
