import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, debounceTime, map, of, switchMap } from "rxjs";
import { AppAuthService } from "src/app/global/components/auth/auth.service";

export function emptyString(ctrl: AbstractControl): ValidationErrors | null {
  const val = ctrl.value as string;

  if(val === null) return null;

  return val.trim().length === 0 ? {emptyString: true} : null;
}

export function usernameTaken(authService: AppAuthService): AsyncValidatorFn | null {
  return (ctrl: AbstractControl): Observable<ValidationErrors> => {
    if (!ctrl || (ctrl?.value === null) || (ctrl?.value?.trim().length === 0)) return null;
    return of(ctrl.value as string).pipe(
      debounceTime(10000),
      switchMap((v: string) => authService.isUsernameTaken(v)),
      map(res => res ? null : {usernameTaken: true})
    );
  }
}

export function fieldsMismatch(fieldName: string): ValidatorFn | null {
  return (field2: AbstractControl) => {
    if(!field2.parent) return null;

    const field1 = field2.parent.get(fieldName);
    if(!field1) throw new Error(`No control ${fieldName} found in parent control`);

    const regExp = new RegExp(field1.value, "iu");

    return regExp.test(field2.value) ? null : {fieldsMismatch: true};
  }
}
