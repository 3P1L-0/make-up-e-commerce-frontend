import { NgModule } from "@angular/core";
import {AppBrandsModule} from "./brands/brands.module";
import {AppCategoriesModule} from "./categories/categories.module";

@NgModule({
  exports: [
    AppBrandsModule,
    AppCategoriesModule
  ]
})
export class AppUtilitiesModule {}
