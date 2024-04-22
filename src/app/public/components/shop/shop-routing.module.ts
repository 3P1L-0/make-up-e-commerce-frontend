import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppProductsShopComponent } from "./products-shop/products-shop.component";

const routes: Routes = [
  {
    path: "products",
    component: AppProductsShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShopRoutingModule {}