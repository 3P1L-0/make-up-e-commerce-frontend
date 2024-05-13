import { NgModule } from '@angular/core';
import {AppCheckoutComponent} from "./checkout.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {ReactiveFormsModule} from "@angular/forms";

const declarations = [
  AppCheckoutComponent
]

@NgModule({
  declarations: declarations,
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule
  ]
})
export class AppCheckoutModule { }
