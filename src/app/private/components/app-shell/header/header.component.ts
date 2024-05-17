import {Component, inject, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {AppMenuService} from "../main-menu/services/menu.service";
import {AppNavigationService} from "../../../../global/services/navigation.service";
import {PUBLIC_ROUTES} from "../../../../global/configs";
import {AppAuthService} from "../../../../global/components/auth/auth.service";

@Component({
  selector: 'app-header-view',
  templateUrl: './header.component.html',
  host: {"class": "app-private-header-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
  //----------- DEPENDENCIES -----------//
  private readonly _mainMenuService = inject(AppMenuService);
  private readonly _navigationService = inject(AppNavigationService);
  private readonly _authService = inject(AppAuthService);

  //----------- MEMBERS -----------//
  public readonly publicShopAddress = PUBLIC_ROUTES.home;
  public readonly cartAddress = PUBLIC_ROUTES.cart;
  public userAvatar: string;

  public ngOnInit() {
    this.userAvatar = this._authService.activeSession?.user.img.url;
  }

  public toggleHide(): void {
    this._mainMenuService.toggleHide();
  }
}
