import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppPublicProductListComponent } from "./product-list/product-list.component";
import { AppPublicProductDetailsComponent } from "./product-details/product-details.component";
import { AppPublicProductsComponent } from "./public-products.component";
import { AppPublicProductsTable } from "./product-list/products-table/products-table.component";
import { AppPublicProductVariantsTable } from "./product-list/product-variants-table/product-variants-table.component";

const declarations = [
  AppPublicProductListComponent,
  AppPublicProductsComponent,
  AppPublicProductsTable,
  AppPublicProductVariantsTable,
  AppPublicProductDetailsComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...declarations
  ]
})
export class AppPublicProductsModule {}
