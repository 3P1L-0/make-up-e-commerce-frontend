import { NgModule } from "@angular/core";
import { AppSignInComponent } from "./sign-in/sign-in.component";
import { AppCommonImportsModule } from "src/app/global/modules/commom-imports.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppAuthRoutingModule } from "./auth-routing.module";
import { AppSignUpComponent } from "./sign-up/sign-up.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const declarations = [
  AppSignInComponent,
  AppSignUpComponent
];

@NgModule({
  declarations: declarations,
    imports: [
        AppCommonImportsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
  exports: [AppAuthRoutingModule]
})
export class AppAuthModule {}
