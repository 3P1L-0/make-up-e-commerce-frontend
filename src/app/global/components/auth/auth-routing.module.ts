import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppSignInComponent } from "./sign-in/sign-in.component";
import { AppSignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "sign-in",
    component: AppSignInComponent
  },
  {
    path: "sign-up",
    component: AppSignUpComponent
  },
  {
    path: "recover-account",
    component: AppSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule {}
