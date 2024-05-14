import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-billing-address-view",
  templateUrl: "./billing-address.component.html",
  host: {"class": "billing-address-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppBillingAddressComponent {}
