import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart.component.html',
  host: {"class": "app-cart-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppCartComponent {}
