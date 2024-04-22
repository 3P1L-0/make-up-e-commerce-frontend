import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { AppDashboardLoaderComponent } from "./dashboard-loader.component";
import { AppLoadDashboardDirective } from "./directives/load-dashboard.directive";

let declarations = [
  AppDashboardLoaderComponent,
  AppLoadDashboardDirective
];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommonImportsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...declarations
  ]
})
export class AppDashboadModule {}
