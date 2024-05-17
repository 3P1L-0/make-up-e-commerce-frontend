import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppDashboardLoaderComponent } from "../components/dashboard/dashboard-loader.component";
import {AppShellComponent} from "../components/app-shell/app-shell.component";
import {AppAuthGuard} from "../../global/guards/AuthGuard";

const routes: Routes = [
  {
    path: "",
    component: AppShellComponent,
    canActivate: [AppAuthGuard],
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
      },
      {
        path: "users",
        loadChildren: () => import("../components/users/users.module").then(m => m.AppUsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateRoutingModule {}
