import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import {AppPrimeNgModule} from "./primeng.module";

@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    AppPrimeNgModule
  ]
})
export class AppCommonImportsModule {}
