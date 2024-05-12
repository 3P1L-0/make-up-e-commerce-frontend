import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";
import {AppPublicShellComponent} from "../components/app-shell/app-shell.component";
import * as path from "node:path";
import {AppCartComponent} from "../components/cart/cart.component";

const routes: Routes = [
  {
    path: "",
    component: AppPublicShellComponent,
    children: [
      {
        title: "Início",
        path: "home",
        component: AppLandingPageComponent
      },
      {
        title: "Carrinho",
        path: "cart",
        component: AppCartComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      { path: "**", redirectTo: "" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPublicRoutingModule {}
