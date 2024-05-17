import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {map, Observable, of, switchMap} from "rxjs";
import {AppAuthService} from "../components/auth/auth.service";
import {MessageService} from "primeng/api";
import {PUBLIC_ROUTES} from "../configs";

@Injectable({providedIn: 'root'})
export class AppAuthGuard implements CanActivate {
  private readonly _authService = inject(AppAuthService);
  private readonly _router = inject(Router)
  private readonly _msgService = inject(MessageService);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return of(this._authService.isSignedIn()).pipe(switchMap(isSignedIn => {
      if(isSignedIn) {
        /* check if navigating to auth section while signed in */
        if(this._authService.isSessionAlive() && state.url.includes("auth")) return of(false);

        /* Check if token expired */
        if(!this._authService.isSessionAlive()) {
          return this._authService.destroy().pipe(map(() => {
            this._showToast();
            return this._router.parseUrl(PUBLIC_ROUTES.signIn);
          }));
        }
      }

      /* Check if there's an active session */
      if(!(this._authService.isSessionAlive() || state.url.includes("auth"))) {
        this._showToast()
        return of(this._router.parseUrl(PUBLIC_ROUTES.signIn));
      }

      /* all is well: Rancho Ranchoddas */
      return of(true);
    }));
  }

  private _showToast(): void {
    this._msgService.add({
      severity: "info",
      detail: "Deve iniciar sessão antes de prosseguir",
      closable: true
    });
  }
}
