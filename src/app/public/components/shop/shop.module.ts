import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppPrimeNgModule } from "src/app/global/modules/primeng.module";
import { AppProductsShopComponent } from "./products-shop/products-shop.component";

const declarations = [
  AppProductsShopComponent
];

@NgModule({
  declarations: declarations,
  exports: [
    ...declarations,
  ],
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
    AppPrimeNgModule,
    FontAwesomeModule
  ]
})
export class AppShopModule {}
