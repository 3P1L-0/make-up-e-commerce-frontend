import { NgModule } from "@angular/core";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppPrimeNgModule } from "src/app/global/modules/primeng.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppCategoriesComponent } from "./categories.component";

const declarations = [
  AppCategoriesComponent
]

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
    ReactiveFormsModule,
    AppPrimeNgModule, FontAwesomeModule
  ]
})
export class AppCategoriesModule {}
