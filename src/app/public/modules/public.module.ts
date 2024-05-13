import { NgModule } from "@angular/core";
import { AppPublicRoutingModule } from "./public-routing.module";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import {AppPublicShellModule} from "../components/app-shell/app-shell.module";
import {AppCartModule} from "../components/cart/cart.module";
import {AppCheckoutModule} from "../components/checkout/checkout.module";
import {AppSaleItemModule} from "../components/sale-item/sale-item.module";

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
    AppCheckoutModule,
    AppSaleItemModule,
    AppPublicRoutingModule,
  ],
  providers: []
})
export class AppPublicModule {}
