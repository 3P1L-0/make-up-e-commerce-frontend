import { NgModule } from "@angular/core";
import { AppBreadcrumbModule } from "../components/breadcrumb/breadcrumb.module";
import { AppGlobalLayoutModule } from "../components/layout/layout.module";

@NgModule({
  exports: [
    AppBreadcrumbModule,
    AppGlobalLayoutModule
  ]
})
export class AppGlobalModule {}
