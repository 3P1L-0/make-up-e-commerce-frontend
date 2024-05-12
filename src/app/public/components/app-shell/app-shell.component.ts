import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-shell-view",
  templateUrl: "./app-shell.component.html",
  host: {"class": "app-public-shell-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppPublicShellComponent {
  /* DEPENDENCIES */
  /* MEMBERS */
  public showCart: boolean;

  constructor(_router: Router) {
    this.showCart = false;
  }
}
