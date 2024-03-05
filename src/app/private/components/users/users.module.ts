import { NgModule } from "@angular/core";
import { AppAdminModule } from "./components/admin/admin.module";

@NgModule({
  exports: [
    AppAdminModule
  ]
})
export class AppUsersModule {}
