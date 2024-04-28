import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AppHeaderComponent} from "./header.component";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [AppHeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule
    ],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
