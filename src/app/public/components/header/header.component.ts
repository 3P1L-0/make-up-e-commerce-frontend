import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "src/app/global/configs";
import {AppAuthService} from "src/app/global/components/auth/auth.service";
import {AppThemeService} from "src/app/global/services/theme/theme.service";
import {AppNavigationService} from "../../../global/services/navigation.service";
import {map, Observable, Subscription} from "rxjs";
import {AppCartService} from "../cart/cart.service";

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
  private readonly _cartService = inject(AppCartService);

  /* MEMBERS */
  public isDarkThemeMode: boolean;
  public readonly routes: typeof PUBLIC_ROUTES;
  public pageName$: Observable<string>;
  private _subscriptions: Subscription[];
  public notHome$: Observable<boolean>;

  constructor() {
    this.isDarkThemeMode = this._themeService.isDarkMode();
    this.routes = PUBLIC_ROUTES;
    this._subscriptions = [];
  }

  public ngOnInit() {
    this._navigationService.requestViewTitle();
    this._navigationService.requestCurrentRoute();
    this.pageName$ = this._navigationService.viewTitleEmitted$;
    this.notHome$ = this._navigationService.currentRouteEmitted$.pipe(map(r => r === PUBLIC_ROUTES.home));
  }

  public get itenmsInCart(): Observable<number> { return }

  public ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  public get isSignedIn(): boolean {
    return this._authService.isSignedIn();
  }

  public signIn(): void { this._navigationService.navigateTo([PUBLIC_ROUTES.signIn]); }
  public signOut() { this._authService.signOut().subscribe(resp => {}); }
  public signUp(): void { this._navigationService.navigateTo([PUBLIC_ROUTES.signUp]); }
  public goToProfile(): void { this._navigationService.navigateTo([PRIVATE_ROUTES.home]); }
}