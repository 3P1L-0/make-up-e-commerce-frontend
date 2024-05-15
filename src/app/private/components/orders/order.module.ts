import {NgModule} from "@angular/core";
import {AppOrderListComponent} from "./order-list/orders.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {AppOrderListItemComponent} from "./order-list-item/order-list-item.component";
import {AppOrderDetailComponent} from "./order-detail/order-detail.component";

const declarations = [
  AppOrderListComponent,
  AppOrderListItemComponent,
  AppOrderDetailComponent
]
@NgModule({
  declarations: declarations,
  exports: declarations,
  imports: [
    AppCommonImportsModule
  ]
})
export class AppOrderModule {}
