import {NgModule} from "@angular/core";
import {AppPublicShellComponent} from "./app-shell.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AppHeaderModule} from "../header/header.module";
import {AppFooterModule} from "../../../global/components/footer/footer.module";

@NgModule({
  declarations: [AppPublicShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppHeaderModule,
    AppFooterModule
  ]
})
export class AppPublicShellModule { }
