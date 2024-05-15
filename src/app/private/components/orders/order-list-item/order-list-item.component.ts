import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "order-list-item-view",
  templateUrl: "./order-list-item.component.html",
  host: {"class": "order-list-item-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppOrderListItemComponent {}
