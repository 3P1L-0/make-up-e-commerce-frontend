import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppProductListComponent } from "../components/list/product-list.component";
import { AppProductFormComponent } from "../components/form/product-form.component";

const routes: Routes = [
  {path: '', component: AppProductListComponent},
  {path: 'form', component: AppProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProudctsRoutingModule {}
