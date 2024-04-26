import { NgModule } from "@angular/core";
import { AppPrivateRoutingModule } from "./private-routing.module";
import { AppDashboadModule } from "../components/dashboard/dashboard.module";
import {AppUtilitiesModule} from "../components/utilities/utilities.module";
import {AppShellModule} from "../components/app-shell/app-shell.module";

@NgModule({
  exports: [
    AppPrivateRoutingModule,
    AppShellModule,
    AppUtilitiesModule,
    AppDashboadModule
  ]
})
export class AppPrivateModule {}
