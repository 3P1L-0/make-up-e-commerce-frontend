import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";
import {AppPublicShellComponent} from "../components/app-shell/app-shell.component";
import * as path from "node:path";
import {AppCartComponent} from "../components/cart/cart.component";
import {AppCheckoutComponent} from "../components/checkout/checkout.component";
import {AppSaleItemComponent} from "../components/sale-item/sale-item.component";
import {AppAuthGuard} from "../../global/guards/AuthGuard";

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
        path: "shop",
        children: [
          {
            canActivate: [AppAuthGuard],
            title: "Carrinho",
            path: "cart",
            component: AppCartComponent
          },
          {
            canActivate: [AppAuthGuard],
            title: "Fazer Checkout",
            path: "checkout",
            component: AppCheckoutComponent
          },
          {
            title: "Produtos",
            path: "products",
            component: AppSaleItemComponent
          },
          {
            title: "Serviços",
            path: "services",
            component: AppSaleItemComponent
          }
        ]
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
