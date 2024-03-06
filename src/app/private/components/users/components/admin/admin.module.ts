import { NgModule } from "@angular/core";
import { AppAdminMainMenuComponent } from "./menus/main-menu/admin-main-menu.component";
import { AppAdminTopNavigation } from "./menus/top-navigation/admin-top-navigation/admin-top-navigation.component";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { RouterModule } from "@angular/router";

const declarations = [
  AppAdminMainMenuComponent,
  AppAdminTopNavigation
]

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
    RouterModule
  ],
  exports: [
    ...declarations
  ]
})
export class AppAdminModule{}
