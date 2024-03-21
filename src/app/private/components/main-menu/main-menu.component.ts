import { Component, inject } from "@angular/core";
import { MAIN_MENU_ELEMENTS, PRIVATE_ROUTES } from "src/app/global/configs";
import { AppMenuService } from "./services/menu.service";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  host: {'class': 'app-main-menu-module'}
})
export class AppMainMenuComponent {
  /* DEPENDENCIES */
  private readonly _menuService = inject(AppMenuService);

  /* MEMBERS */
  public readonly routes: typeof PRIVATE_ROUTES;
  public readonly menuParts: typeof MAIN_MENU_ELEMENTS;

  constructor () {
    this.routes = PRIVATE_ROUTES;
    this.menuParts = MAIN_MENU_ELEMENTS;
  }

  public toggleShrink(): void { this._menuService.toggleShrinked(); }
  public toggleHide(evt: MouseEvent): void { this._menuService.toggleHide(); }
  public hideMenu(): void { this._menuService.hideMenu(); }
}
