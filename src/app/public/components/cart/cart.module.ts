import {NgModule} from "@angular/core";
import {AppCartComponent} from "./cart.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import {AppCartItemComponent} from "./cart-item/cart-item.component";

const declarations = [
  AppCartComponent,
  AppCartItemComponent
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  imports:[
    AppCommonImportsModule
  ]
})
export class AppCartModule { }
