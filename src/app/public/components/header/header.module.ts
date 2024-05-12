import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppHeaderComponent } from "./header.component";
import { AppBreadcrumbModule } from "src/app/global/components/breadcrumb/breadcrumb.module";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";

const declarations = [
  AppHeaderComponent
];

@NgModule({
  declarations: declarations,
  exports: [
    ...declarations
  ],
  imports: [
    AppCommonImportsModule,
    RouterModule,
    AppBreadcrumbModule
  ]
})
export class AppHeaderModule {}
