import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-private-shell-view",
  templateUrl: "./private-shell.component.html",
  host: {"class": "app-private-shell-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppPrivateShellViewComponent {}
