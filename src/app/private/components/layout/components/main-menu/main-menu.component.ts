import { Component } from "@angular/core";
import { PRIVATE_ROUTES } from "src/app/global/configs";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html"
})
export class AppMainMenuComponent {
  /* MEMBERS */
  public readonly routes: typeof PRIVATE_ROUTES;

  constructor () {
    this.routes = PRIVATE_ROUTES;
  }
}
