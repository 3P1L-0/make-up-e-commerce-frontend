import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { PUBLIC_ROUTES } from "src/app/global/configs";
import { AppAuthService } from "src/app/global/services/auth.service";
import { AppThemeService } from "src/app/global/services/theme/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  host: {'class': 'app-header-module'}
})
export class AppHeaderComponent {
  /* DEPENDENCIES */
  private readonly _themeService = inject(AppThemeService);
  private readonly _authService = inject(AppAuthService);
  private readonly _router = inject(Router);

  /* MEMBERS */
  public isDarkThemeMode: boolean;

  constructor() { this.isDarkThemeMode = this._themeService.isDarkMode(); }

  public toggleTheme(): void {
    console.log("toggling the theme mode");
    this.isDarkThemeMode = this._themeService.toggleDarkMode(); }

  public get themeMode(): string { return this.isDarkThemeMode ? "Escuro" : "Claro"; }
  public get isSignedIn(): boolean {
    return this._authService.isSignedIn();
  }

  public signIn(): void {
    this._router.navigate([PUBLIC_ROUTES.signIn]).then();
  }
}
