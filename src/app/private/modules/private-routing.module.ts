import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppDashboardLoaderComponent } from "../components/dashboard/dashboard-loader.component";
import {AppPrivateShellViewComponent} from "../components/private-shell/private-shell.component";

const routes: Routes = [
  {
    path: "",
    component: AppPrivateShellViewComponent,
    children: [
      {
        path: "",
        component: AppDashboardLoaderComponent
      },
      {
        path: "products",
        loadChildren: () => import("../components/products/product.module").then(m => m.AppPrivateProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateRoutingModule {}
