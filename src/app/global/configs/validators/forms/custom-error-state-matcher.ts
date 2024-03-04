import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Triggers validation only when is dirty, touched, or form has submitted. */
export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl<any>, form: FormGroupDirective | NgForm): boolean {
    const isSubmitted = form && form?.submitted;
    return control && control?.invalid && (control?.dirty || /* control.touched || */ isSubmitted);
  }
}
