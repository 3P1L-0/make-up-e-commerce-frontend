import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { PUBLIC_ROUTES } from "src/app/global/configs";
import { AppAuthService } from "src/app/global/components/auth/auth.service";
import { AppThemeService } from "src/app/global/services/theme/theme.service";
import {MenuItem} from "primeng/api";

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
  public readonly routes: typeof PUBLIC_ROUTES;
  public readonly usrMenuConf: MenuItem[];
  public readonly shopMenuConf: MenuItem[];

  constructor() {
    this.isDarkThemeMode = this._themeService.isDarkMode();
    this.routes = PUBLIC_ROUTES;
    this.usrMenuConf = userMenu(this);
    this.shopMenuConf = shopMenu(this);
  }

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

  public signOut() {
    this._authService.signOut().subscribe(resp => {});
  }
}

const userMenu = (comp: AppHeaderComponent) => {
  return [
    {
      label: "Iniciar Sessão",
      icon: "fa right-to-bracket",
      routerLink: PUBLIC_ROUTES.signIn,
      visible: !comp.isSignedIn
    },
    {separator: true},
    {
      label: "Criar Conta",
      icon: "fa user-plus",
      routerLink: PUBLIC_ROUTES.signUp,
      visible: !comp.isSignedIn
    },
    {
      label: "Terminar Sessão",
      icon: "fa right-from-bracket",
      command: comp.signOut,
      visible: comp.isSignedIn
    }
  ];
}

const shopMenu = (comp: AppHeaderComponent) => {
  return [
    {
      label: "Produtos",
      icon: "fa shopify",
      routerLink: PUBLIC_ROUTES.products_shop
    }
  ];
}
