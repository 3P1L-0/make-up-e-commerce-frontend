import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-shell-view",
  templateUrl: "./app-shell.component.html",
  host: {"class": "app-private-shell-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppShellComponent {
  constructor(_router: Router) {
  }
}
