import {NgModule} from "@angular/core";
import {AppUsersRoutingModule} from "./users-routing.module";
import {AppViewHeaderModule} from "../view-header/view-header.module";
import {AppUsersComponent} from "./users-list/users.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";

@NgModule({
  declarations: [AppUsersComponent],
  imports: [
    AppCommonImportsModule,
    AppUsersRoutingModule,
    AppViewHeaderModule
  ]
})
export class AppUsersModule { }
