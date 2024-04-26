import { NgModule } from "@angular/core";
import { AppMainMenuComponent } from "./main-menu.component";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppMainMenuComponent],
  exports: [AppMainMenuComponent],
  imports: [
    AppCommonImportsModule,
    RouterModule
  ]
})
export class AppMainMenuModule {}
