import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-order-detail-view',
  templateUrl: './order-detail.component.html',
  host: {"class": "app-order-detail-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppOrderDetailComponent {}
