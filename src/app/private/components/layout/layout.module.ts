import { NgModule } from "@angular/core";
import { AppLayoutComponent } from "./layout.component";
import { AppMainMenuComponent } from "./components/main-menu/main-menu.component";
import { AppFooterComponent } from "./components/footer/footer.component";
import { AppUsersModule } from "../users/users.module";
import { AppHeaderModule } from "./components/header/header.module";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { RouterModule } from "@angular/router";

const declarations = [
  AppLayoutComponent,
  AppMainMenuComponent,
  AppFooterComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
    RouterModule,
    AppUsersModule,
    AppHeaderModule
  ],
  exports: [
    ...declarations,
  ]
})
export class AppLayoutModule {}
