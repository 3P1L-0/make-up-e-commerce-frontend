import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from "../components/layout/layout.component";
import { UserGuard } from "../guards/user-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    canActivate:  [UserGuard],
    canLoad: [UserGuard],
    children: [
      {
        path: "products",
        loadChildren: () => import("../components/sale-items/products/modules/product.module").then(m => m.AppProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateRoutingModule {}
