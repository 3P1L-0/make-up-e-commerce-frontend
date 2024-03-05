import { NgModule } from "@angular/core";
import { AppAdminMainMenuComponent } from "./menus/main-menu/admin-main-menu.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/global/modules/material.module";
import { RouterModule } from "@angular/router";
import { AppAdminTopNavigation } from "./menus/top-navigation/admin-top-navigation/admin-top-navigation.component";

const declarations = [
  AppAdminMainMenuComponent,
  AppAdminTopNavigation
]

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ...declarations
  ]
})
export class AppAdminModule{}
