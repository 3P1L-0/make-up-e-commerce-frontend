import { Component, inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "src/app/global/configs";
import { Credentials } from "src/app/global/model/auth";
import { AppAuthService } from "src/app/global/components/auth/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  host: {'class': 'app-sign-in-module'}
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

  public home() { this._router.navigate([PUBLIC_ROUTES.home]).then() }

  public signIn() {
    const creds = new Credentials();
    Object.assign(creds.getDTO(), this.signInForm.value);

    if (this.isFormInvalid()) return;

    this._authService.signIn(creds.getDTO()).subscribe(session => {
      console.log(session);
      if((this.wrongCredentials = !this._authService.isSessionAlive())) return;
      else this._router.navigate([PRIVATE_ROUTES.home]).then();
    });
  }

  public recoverAccount(): void {
    this._router.navigate([PUBLIC_ROUTES.recoverAccount]).then();
  }

  public isFormInvalid() {
    return !this.signInForm.valid
  }

  public newAccount() { this._router.navigate([PUBLIC_ROUTES.signUp]).then(); }
}
