import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import {AppPrivateServicesRoutingModule} from "./service-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {AppViewHeaderModule} from "../../view-header/view-header.module";
import {AppServiceListComponent} from "./service-list/service-list.component";
import {AppServiceFormComponent} from "./service-form/service-form.component";
import { ServiceListItemComponent } from './service-list/service-list-item/service-list-item.component';

@NgModule({
  declarations: [
    AppServiceListComponent,
    AppServiceFormComponent,
    ServiceListItemComponent
  ],
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
    AppPrivateServicesRoutingModule,
    FontAwesomeModule,
    AppViewHeaderModule
  ]
})
export class AppPrivateServicesModule {}
