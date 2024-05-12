import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "src/app/global/configs";
import {AppAuthService} from "src/app/global/components/auth/auth.service";
import {AppThemeService} from "src/app/global/services/theme/theme.service";
import {AppNavigationService} from "../../../global/services/navigation.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: "app-header-view",
  templateUrl: "./header.component.html",
  host: {'class': 'app-public-header-module'}
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  /* DEPENDENCIES */
  private readonly _themeService = inject(AppThemeService);
  private readonly _authService = inject(AppAuthService);
  private readonly _router = inject(Router);
  private readonly _navigationService = inject(AppNavigationService);

  /* MEMBERS */
  public isDarkThemeMode: boolean;
  public readonly routes: typeof PUBLIC_ROUTES;
  public pageName$: Observable<string>;
  private _subscriptions: Subscription[];
  private _activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.isDarkThemeMode = this._themeService.isDarkMode();
    this.routes = PUBLIC_ROUTES;
    this._subscriptions = [];
  }

  public ngOnInit() {
    this._navigationService.requestViewTitle();
    this.pageName$ = this._navigationService.viewTitleEmitted$;
  }

  public ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  public get isSignedIn(): boolean {
    return this._authService.isSignedIn();
  }

  public signIn(): void { this._router.navigate([PUBLIC_ROUTES.signIn]).then(); }
  public signOut() { this._authService.signOut().subscribe(resp => {}); }
  public goToProfile(): void { this._navigationService.navigateTo([PRIVATE_ROUTES.home]); }
}
