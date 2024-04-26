import { NgModule } from "@angular/core";
import { AppHeaderModule } from "./header/header.module";
import { AppCommonImportsModule } from "../../modules/commom-imports.module";
import { AppGlobalLayoutComponent } from "./layout.component";
import { AppMainMenuModule } from "src/app/private/components/app-shell/main-menu/main-menu.module";
import { RouterModule } from "@angular/router";

const declarations = [
  AppGlobalLayoutComponent,
]

@NgModule({
  declarations: declarations,
  imports: [
    AppCommonImportsModule,
    RouterModule,
    AppHeaderModule,
    AppMainMenuModule
  ],
  exports: [
    ...declarations,
    AppHeaderModule,
    AppMainMenuModule
  ]
})
export class AppGlobalLayoutModule {}
