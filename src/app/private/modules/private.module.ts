import { NgModule } from "@angular/core";
import { AppPrivateRoutingModule } from "./private-routing.module";
import { AppDashboadModule } from "../components/dashboard/dashboard.module";
import {AppUtilitiesModule} from "../components/utilities/utilities.module";
import {AppPrivateShellViewComponent} from "../components/private-shell/private-shell.component";
import {AppCommonImportsModule} from "../../global/modules/commom-imports.module";

@NgModule({
  declarations: [AppPrivateShellViewComponent],
  imports: [AppCommonImportsModule],
  exports: [
    AppPrivateShellViewComponent,
    AppPrivateRoutingModule,
    AppUtilitiesModule,
    AppDashboadModule
  ]
})
export class AppPrivateModule {}
