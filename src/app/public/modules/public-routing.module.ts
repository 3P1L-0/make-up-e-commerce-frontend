import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLandingPageComponent } from "../components/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "shop",
    loadChildren: () => import("../components/shop/shop.module").then(m => m.AppShopModule)
  },
  {
    path: '',
    component: AppLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPublicRoutingModule {}
