import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    component: AppLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPublicRoutingModule {}
