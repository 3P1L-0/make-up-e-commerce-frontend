import { NgModule } from "@angular/core";
import {AppBrandsModule} from "./brands/brands.module";
import {AppCategoriesModule} from "./categories/categories.module";
import {AppSpecialtiesModule} from "./especialties/specialties.module";

@NgModule({
  exports: [
    AppBrandsModule,
    AppCategoriesModule,
    AppSpecialtiesModule
  ]
})
export class AppUtilitiesModule {}
