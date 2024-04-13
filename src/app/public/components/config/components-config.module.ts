import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppCategoryFormComponent } from "./category/category-form.component";

const declarations = [
  AppCategoryFormComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...declarations
  ]
})
export class AppComponentsConfigModule {}
