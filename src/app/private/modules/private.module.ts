import { NgModule } from "@angular/core";
import { AppPrivateRoutingModule } from "./private-routing.module";
import { AppDashboadModule } from "../components/dashboard/dashboard.module";

@NgModule({
  exports: [
    AppPrivateRoutingModule,
    AppDashboadModule
  ]
})
export class AppPrivateModule {}
