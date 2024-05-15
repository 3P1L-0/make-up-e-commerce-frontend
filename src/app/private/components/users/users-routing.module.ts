import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppUsersComponent} from "./users-list/users.component";
import {AppUserDetailsComponent} from "./user-details/user-details.component";
import {AppOrderListComponent} from "../orders/order-list/orders.component";
import {AppOrderDetailComponent} from "../orders/order-detail/order-detail.component";

const routes: Routes = [
  {
    data: { isEmployee: true},
    title: "Funcionários",
    path: "employees",
    component: AppUsersComponent,
  },
  {
    title: "Detalhes do Funcionário",
    path: "employeeDetails/:id",
    component: AppUserDetailsComponent
  },
  {
    data: { isEmployee: false},
    title: "Clientes",
    path: "clients",
    component: AppUsersComponent
  },
  {
    title: "Detalhes do Cliente",
    path: "clientDetails/:id",
    component: AppUserDetailsComponent
  },
  {
    title: "Encomendas",
    path: "orders",
    component: AppOrderListComponent
  },
  {
    title: "Detalhes da Encomenda",
    path: "orders",
    component: AppOrderDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsersRoutingModule {}
