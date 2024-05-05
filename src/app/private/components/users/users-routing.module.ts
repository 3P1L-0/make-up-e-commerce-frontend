import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppUsersComponent} from "./users-list/users.component";

const routes: Routes = [
  {
    data: { isEmployee: true},
    title: "Funcionários",
    path: "employees",
    component: AppUsersComponent
  },
  {
    data: { isEmployee: false},
    title: "Clientes",
    path: "clients",
    component: AppUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsersRoutingModule {}
