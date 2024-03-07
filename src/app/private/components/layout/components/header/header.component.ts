import { Component, inject } from "@angular/core";
import { AppThemeService } from "src/app/global/services/theme/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class AppHeaderComponent {
  /* DEPENDENCIES */
  private readonly _themeService = inject(AppThemeService);

  /* MEMBERS */
  public isDarkThemeMode: boolean;

  constructor() { this.isDarkThemeMode = this._themeService.isDarkMode(); }

  public toggleTheme(): void {
    console.log("toggling the theme mode");
    this.isDarkThemeMode = this._themeService.toggleDarkMode(); }

  public get themeMode(): string { return this.isDarkThemeMode ? "Escuro" : "Claro"; }
}
