import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppUsersComponent} from "./users-list/users.component";
import {AppUserDetailsComponent} from "./user-details/user-details.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsersRoutingModule {}
