import {Component, inject, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {AppMenuService} from "../main-menu/services/menu.service";
import {AppNavigationService} from "../../../../global/services/navigation.service";
import {PUBLIC_ROUTES} from "../../../../global/configs";

@Component({
  selector: 'app-header-view',
  templateUrl: './header.component.html',
  host: {"class": "app-private-header-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent {
  //----------- DEPENDENCIES -----------//
  private readonly _mainMenuService = inject(AppMenuService);
  private readonly _navigationService = inject(AppNavigationService);

  //----------- MEMBERS -----------//
  public readonly publicShopAddress = PUBLIC_ROUTES.home;
  public readonly cartAddress = PUBLIC_ROUTES.cart;

  public toggleHide(): void {
    this._mainMenuService.toggleHide();
  }
}
