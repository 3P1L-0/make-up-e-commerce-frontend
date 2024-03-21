import { NgModule } from "@angular/core";
import { AppHeaderModule } from "./header/header.module";
import { AppFooterComponent } from "./footer/footer.component";
import { AppCommomImportsModule } from "../../modules/commom-imports.module";
import { AppGlobalLayoutComponent } from "./layout.component";
import { AppMainMenuModule } from "src/app/private/components/main-menu/main-menu.module";
import { RouterModule } from "@angular/router";

const declarations = [
  AppGlobalLayoutComponent,
  AppFooterComponent
]

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
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
