import { Component, inject } from "@angular/core";
import { Router, RouterState } from "@angular/router";

@Component({
  selector: 'app-global-layout',
  templateUrl: './layout.component.html',
  host: {'class': 'app-global-layout-module'}
})
export class AppGlobalLayoutComponent {
  /* DEPENDENCIES */
  private readonly _route = inject(Router);

  /* MEMBERS */
  public readonly isPrivateView: boolean;

  constructor() {
    this.isPrivateView = this._route.routerState.snapshot.url.includes("private")
  }
}
