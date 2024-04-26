import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppProductListComponent } from "./product-list/product-list.component";
import { AppProductsRoutingModule } from "./product-routing.module";
import { AppProductsFormComponent } from "./product-form/product-form.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {AppViewHeaderModule} from "../../view-header/view-header.module";

@NgModule({
  declarations: [
    AppProductListComponent,
    AppProductsFormComponent,
  ],
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
    AppProductsRoutingModule,
    FontAwesomeModule,
    AppViewHeaderModule
  ]
})
export class AppPrivateProductsModule {}
