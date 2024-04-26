import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AppServiceListComponent} from "./service-list/service-list.component";
import {AppServiceFormComponent} from "./service-form/service-form.component";

const routes: Routes = [
  {
    title: "Novo Serviço",
    path: "form",
    component: AppServiceFormComponent
  },
  {
    title: "Detalhes do Serviço",
    path: "form/:id",
    component: AppServiceFormComponent
  },
  {
    title: "Serviços",
    path: "",
    component: AppServiceListComponent,
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
export class AppPrivateServicesRoutingModule {}
