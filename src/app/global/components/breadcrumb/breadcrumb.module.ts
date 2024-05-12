import {NgModule} from "@angular/core";
import {AppBreadcrumbComponent} from "./breadcrumb.component";
import {AppCommonImportsModule} from "../../modules/commom-imports.module";

const declarations = [AppBreadcrumbComponent];

@NgModule({
  declarations: declarations,
  exports: declarations,
  imports: [AppCommonImportsModule]
})
export class AppBreadcrumbModule {}
