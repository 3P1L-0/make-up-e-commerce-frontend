import {Component, inject, ViewEncapsulation} from "@angular/core";
import {AppNavigationService} from "../../../global/services/navigation.service";
import {PUBLIC_ROUTES} from "../../../global/configs";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart.component.html',
  host: {"class": "app-cart-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppCartComponent {
  /* DEPENDENCIES */
  private readonly _navigationService = inject(AppNavigationService);

  public goToCheckout(): void {
    this._navigationService.navigateTo([PUBLIC_ROUTES.checkout])
  }
}
