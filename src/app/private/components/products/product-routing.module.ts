import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPublicProductListComponent } from "./product-list/product-list.component";
import { AppPublicProductsFormComponent } from "./product-form/product-form.component";

const routes: Routes = [
  {
    path: "list",
    component: AppPublicProductListComponent
  },
  {
    path: "form",
    component: AppPublicProductsFormComponent
  },
  {
    path: "form/:id",
    component: AppPublicProductsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateProductsRoutingModule {}
