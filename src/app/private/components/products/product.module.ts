import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppPublicProductListComponent } from "./product-list/product-list.component";
import { AppPublicProductsComponent } from "./public-products.component";
import { AppPublicProductsTable } from "./product-list/products-table/products-table.component";
import { AppPublicProductVariantsTable } from "./product-list/product-variants-table/product-variants-table.component";
import { AppPrivateProductsRoutingModule } from "./product-routing.module";
import { AppPublicProductsFormComponent } from "./product-form/product-form.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppPrimeNgModule } from "src/app/global/modules/primeng.module";

const declarations = [
  AppPublicProductListComponent,
  AppPublicProductsComponent,
  AppPublicProductsTable,
  AppPublicProductVariantsTable,
  AppPublicProductsFormComponent,
];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
    AppPrivateProductsRoutingModule,
    FontAwesomeModule,
    AppPrimeNgModule
  ],
  exports: [
    ...declarations
  ]
})
export class AppPrivateProductsModule {}
