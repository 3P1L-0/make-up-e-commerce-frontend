import { NgModule } from "@angular/core";
import { AppPublicRoutingModule } from "./public-routing.module";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppGlobalLayoutModule } from "src/app/global/components/layout/layout.module";
import { AppPublicProductsModule } from "../components/products/product.module";

const declarations = [
  AppLandingPageComponent,
]

@NgModule({
  declarations: declarations,
  exports: [
    ...declarations,
    AppPublicProductsModule
  ],
  imports: [
    AppCommomImportsModule,
    AppPublicRoutingModule,
    AppGlobalLayoutModule
  ],
  providers: []
})
export class AppPublicModule {}
