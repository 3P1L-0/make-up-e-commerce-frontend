import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/global/modules/material.module";
import { AppHeaderComponent } from "./header.component";
import { AppBreadcrumbModule } from "src/app/global/components/breadcrumb/breadcrumb.module";

const declarations = [
  AppHeaderComponent
];

@NgModule({
  declarations: declarations,
  exports: [
    ...declarations
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AppBreadcrumbModule
  ]
})
export class AppHeaderModule {}
