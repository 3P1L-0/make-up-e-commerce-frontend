import { NgModule } from "@angular/core";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {AppSpecialtiesComponent} from "./specialties.component";

@NgModule({
  declarations: [AppSpecialtiesComponent],
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AppSpecialtiesModule {}
