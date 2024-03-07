import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";

@NgModule({
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class AppCommomImportsModule {}
