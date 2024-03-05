import { Component } from "@angular/core";
import { ACTIVE_LINK, PRIVATE_ROUTES } from "src/app/global/configs";

@Component({
  selector: "app-admin-main-menu",
  templateUrl: "./admin-main-menu.component.html"
})
export class AppAdminMainMenuComponent {
  /* DEPENDENCIES */
  /* MEMBERS */
  public readonly activeLinkClasses: typeof ACTIVE_LINK;
  public readonly routes: typeof PRIVATE_ROUTES;

  constructor() {
    this.activeLinkClasses = ACTIVE_LINK;
    this.routes = PRIVATE_ROUTES;
  }
}
