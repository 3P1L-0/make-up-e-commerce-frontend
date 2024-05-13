import { NgModule } from "@angular/core";
import { AppPublicRoutingModule } from "./public-routing.module";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import {AppPublicShellModule} from "../components/app-shell/app-shell.module";
import {AppCartModule} from "../components/cart/cart.module";
import {AppCheckoutModule} from "../components/checkout/checkout.module";

const declarations = [
  AppLandingPageComponent,
]

@NgModule({
  declarations: declarations,
  exports: [
    ...declarations,
  ],
  imports: [
    AppCommonImportsModule,
    AppPublicShellModule,
    AppCartModule,
    AppPublicRoutingModule,
    AppCheckoutModule
  ],
  providers: []
})
export class AppPublicModule {}
