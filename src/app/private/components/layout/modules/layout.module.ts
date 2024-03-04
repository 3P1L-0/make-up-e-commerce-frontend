import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppLayoutRoutingModule } from "./layout-routing.module";
import { AppLayoutComponent } from "../layout.component";
import { AppHeaderComponent } from "../components/header/header.component";
import { AppMainMenuComponent } from "../components/main-menu/main-menu.component";
import { AppFooterComponent } from "../components/footer/footer.component";
import { MaterialModule } from "src/app/global/modules/material.module";

const declarations = [
  AppLayoutComponent,
  AppHeaderComponent,
  AppMainMenuComponent,
  AppFooterComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    MaterialModule
  ],
  exports: [
    ...declarations,
    AppLayoutRoutingModule
  ]
})
export class AppLayoutModule {}
