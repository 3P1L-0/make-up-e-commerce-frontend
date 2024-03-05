import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../modules/material.module";
import { AppBreadcrumbComponent } from "./breadcrumb.component";

const declarations = [AppBreadcrumbComponent];

@NgModule({
  declarations: declarations,
  exports: [
    ...declarations
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class AppBreadcrumbModule {}
