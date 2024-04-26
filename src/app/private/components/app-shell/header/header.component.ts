import {Component, inject, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-view',
  templateUrl: './header.component.html',
  host: {"class": "app-private-header-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent {
  //----------- DEPENDENCIES -----------//
  private readonly _router = inject(Router);

  //----------- MEMBERS -----------//

}
