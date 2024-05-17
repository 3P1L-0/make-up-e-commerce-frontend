import {NgModule} from '@angular/core';
import {AppSaleItemComponent} from './sale-item.component';
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {AppSaleItemPreviewComponent} from "./sale-item-preview/sale-item-preview.component";
import {AppSaleItemDetailsComponent} from "./sale-item-details/sale-item-details.component";

@NgModule({
  declarations: [
    AppSaleItemComponent,
    AppSaleItemPreviewComponent,
    AppSaleItemDetailsComponent
  ],
  imports: [
    AppCommonImportsModule
  ]
})
export class AppSaleItemModule { }
