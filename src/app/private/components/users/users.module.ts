import {NgModule} from "@angular/core";
import {AppUsersRoutingModule} from "./users-routing.module";
import {AppViewHeaderModule} from "../view-header/view-header.module";
import {AppUsersComponent} from "./users-list/users.component";
import {AppCommonImportsModule} from "../../../global/modules/commom-imports.module";
import { AppUserListItemComponent } from './users-list/user-list-item/user-list-item.component';
import {AppUserDetailsComponent} from "./user-details/user-details.component";
import {AppCardsComponent} from "./cards/cards.component";
import {AppBillingAddressComponent} from "./billing-address/billing-address.component";

@NgModule({
  declarations: [
    AppUsersComponent,
    AppUserListItemComponent,
    AppUserDetailsComponent,
    AppCardsComponent,
    AppBillingAddressComponent,
  ],
  imports: [
    AppCommonImportsModule,
    AppUsersRoutingModule,
    AppViewHeaderModule
  ]
})
export class AppUsersModule { }
