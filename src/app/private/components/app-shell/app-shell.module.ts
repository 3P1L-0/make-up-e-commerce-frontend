import {NgModule} from "@angular/core";
import {AppShellComponent} from "./app-shell.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AppHeaderModule} from "./header/header.module";
import {AppMainMenuModule} from "./main-menu/main-menu.module";
import {AppFooterModule} from "../../../global/components/layout/footer/footer.module";

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppHeaderModule,
    AppMainMenuModule,
    AppFooterModule
  ]
})
export class AppShellModule { }
