import {NgModule} from "@angular/core";
import {AppViewHeaderComponent} from "./view-header.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {RouterModule} from "@angular/router";
import {AppBreadcrumbModule} from "../../../global/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [AppViewHeaderComponent],
    imports: [
        AppCommonImportsModule,
        RouterModule,
        AppBreadcrumbModule
    ],
  exports: [AppViewHeaderComponent],
})
export class AppViewHeaderModule {}
