import { NgModule } from "@angular/core";
import { AppBrandsComponent } from "./brands.component";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppPrimeNgModule } from "src/app/global/modules/primeng.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const declarations = [
  AppBrandsComponent
]

@NgModule({
  declarations: declarations,
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
    AppPrimeNgModule, FontAwesomeModule
  ]
})
export class AppBrandsModule {}
