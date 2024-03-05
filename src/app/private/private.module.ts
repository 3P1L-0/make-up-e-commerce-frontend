import { NgModule } from "@angular/core";
import { AppLayoutModule } from "./components/layout/modules/layout.module";
import { AppUsersModule } from "./components/users/users.module";

@NgModule({
  exports: [
    AppLayoutModule,
    AppUsersModule
  ]
})
export class PrivateModule {}
