import { NgModule } from "@angular/core";
import { AppProductListComponent } from "../components/list/product-list.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/global/modules/material.module";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppProudctsRoutingModule } from "./product-routing.module";
import { AppSaleListItemModule } from "../../sale-list-item/sale-list-item.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppProductFormComponent } from "../components/form/product-form.component";

const declarations = [
  AppProductListComponent,
  AppProductFormComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
    ReactiveFormsModule,
    AppProudctsRoutingModule,
    AppSaleListItemModule
  ],
  exports: [
    ...declarations,
    AppProudctsRoutingModule
  ]
})
export class AppProductsModule {}
