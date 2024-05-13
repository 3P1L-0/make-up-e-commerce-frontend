import {NgModule} from '@angular/core';
import {AppSaleItemComponent} from './sale-item.component';
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {AppSaleItemPreviewComponent} from "./sale-item-preview/sale-item-preview.component";

@NgModule({
  declarations: [
    AppSaleItemComponent,
    AppSaleItemPreviewComponent
  ],
  imports: [
    AppCommonImportsModule
  ]
})
export class AppSaleItemModule { }
