import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-orders-view",
  templateUrl: "./orders.component.html",
  host: {"class": "app-orders-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppOrderListComponent {}
