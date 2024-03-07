import { NgModule } from "@angular/core";
import { AppProductsModule } from "./products/modules/product.module";
import { AppSaleListItemModule } from "./sale-list-item/sale-list-item.module";

@NgModule({
  exports: [
    AppProductsModule,
    AppSaleListItemModule
  ]
})
export class AppSaleItemsModule {}
