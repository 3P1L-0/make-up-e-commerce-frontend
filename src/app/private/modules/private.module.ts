import { NgModule } from "@angular/core";
import { AppPrivateRoutingModule } from "./private-routing.module";
import { AppLayoutModule } from "../components/layout/layout.module";

@NgModule({
  exports: [
    AppLayoutModule,
    AppPrivateRoutingModule
  ]
})
export class AppPrivateModule {}
