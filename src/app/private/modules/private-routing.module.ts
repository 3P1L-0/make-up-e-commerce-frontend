import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppDashboardLoaderComponent } from "../components/dashboard/dashboard-loader.component";

const routes: Routes = [
  {
    path: "",
    component: AppDashboardLoaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateRoutingModule {}
