import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppProductListComponent } from "./product-list/product-list.component";
import { AppProductsFormComponent } from "./product-form/product-form.component";
import {AppProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {
    title: "Novo Produto",
    path: "form",
    component: AppProductsFormComponent
  },
  {
    title: "Detalhes de Produto",
    path: "details/:id",
    component: AppProductDetailsComponent
  },
  {
    title: "Produtos",
    path: "",
    component: AppProductListComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProductsRoutingModule {}
