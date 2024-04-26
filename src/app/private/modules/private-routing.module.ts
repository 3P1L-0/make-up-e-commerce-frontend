import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppDashboardLoaderComponent } from "../components/dashboard/dashboard-loader.component";
import {AppShellComponent} from "../components/app-shell/app-shell.component";

const routes: Routes = [
  {
    path: "",
    component: AppShellComponent,
    children: [
      {
        path: "home",
        component: AppDashboardLoaderComponent
      },
      {
        path: "products",
        loadChildren: () => import("../components/store/products/product.module").then(m => m.AppPrivateProductsModule)
      },
      {
        path: "services",
        loadChildren: () => import("../components/store/service/service.module").then(m => m.AppPrivateServicesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateRoutingModule {}
