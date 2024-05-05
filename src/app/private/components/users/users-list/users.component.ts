import {Component, inject, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-users-view",
  templateUrl: "./users.component.html",
  host: {"class": "app-users-list-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppUsersComponent {
  /* DEPENDENCIES */
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  /* MEMBERS */
  public isEmployee: boolean;

  constructor() {
    this.isEmployee = this._activatedRoute.snapshot.data.isEmployee;
  }

  public newEmployee(): void {}
}
