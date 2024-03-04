import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from "../layout.component";
import { UserGuard } from "../../../guards/user-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    canActivate:  [UserGuard],
    canLoad: [UserGuard],
    children: [
      {path: "home"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule {}
