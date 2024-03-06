import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppLayoutRoutingModule } from "./layout-routing.module";
import { AppLayoutComponent } from "../layout.component";
import { AppMainMenuComponent } from "../components/main-menu/main-menu.component";
import { AppFooterComponent } from "../components/footer/footer.component";
import { MaterialModule } from "src/app/global/modules/material.module";
import { AppUsersModule } from "../../users/users.module";
import { AppHeaderModule } from "../components/header/header.module";

const declarations = [
  AppLayoutComponent,
  AppMainMenuComponent,
  AppFooterComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    MaterialModule,
    AppUsersModule,
    AppHeaderModule
  ],
  exports: [
    ...declarations,
    AppLayoutRoutingModule
  ]
})
export class AppLayoutModule {}
