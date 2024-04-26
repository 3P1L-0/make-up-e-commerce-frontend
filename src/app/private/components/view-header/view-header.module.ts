import {NgModule} from "@angular/core";
import {AppViewHeaderComponent} from "./view-header.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {RouterModule} from "@angular/router";
import {AppViewHeaderService} from "./view-header.service";

@NgModule({
  declarations: [AppViewHeaderComponent],
  imports: [
    AppCommonImportsModule,
    RouterModule
  ],
  exports: [AppViewHeaderComponent],
  providers: [AppViewHeaderService]
})
export class AppViewHeaderModule {}
