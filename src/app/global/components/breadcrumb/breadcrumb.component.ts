import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";
import {Subscription} from "rxjs";
import {AppNavigationService} from "../../services/navigation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-breadcrumb-view',
  templateUrl: './breadcrumb.components.html',
  host: {'class': 'app-breadcrumb-module'}
})
export class AppBreadcrumbComponent implements OnInit, OnDestroy {
  /* DEPENDENCIES */
  private readonly _navigationService = inject(AppNavigationService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _location = inject(Location);

  /* MEMBERS */
  public breadcrumbModel: MenuItem[];
  public home: MenuItem;
  private _subscriptions: Subscription[];

  constructor() {
    this.breadcrumbModel = [];
    this._subscriptions = [];

    this._subscriptions.push(this._navigationService.goBackRequested$.subscribe(navigate => {
      if(navigate) this._router.navigate([this._getPreviousRoute()]).then();
    }));

    this._subscriptions.push(this._navigationService.viewTitleRequested$.subscribe(navigate => {
      this._navigationService.requestViewTitleEmitted(this._activatedRoute.snapshot.routeConfig.title as string);
    }));
  }

  public ngOnInit(): void {
    this._buildBreadcrumb();
  }

  public ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  private _buildBreadcrumb(): void {
    const root = location.hash.slice(this._computeHomeLink().length+2);
    const parts = root.split("/").filter(p => p.trim().length > 0).slice(2);

    this.home = {
      icon: "pi pi-home",
      routerLink: this._computeHomeLink(),
    };

    if(parts.length) {
      for (let p of parts) {
        if (Number.isFinite(Number(p))) continue;

        this.breadcrumbModel.push({
          label: p,
          routerLink: root.slice(0, root.indexOf(p)).concat(p)
        });
      }
    } else this.breadcrumbModel.push({ // i am feeling lazy so I am just going to add this fallback route
      label: "home",
      routerLink: this._computeHomeLink(),
    });
  }

  private _computeHomeLink(): string {
    const root = location.hash.slice(1);
    const parts = root.split("/");
    let limit =  0;

    if(parts.includes("home")) limit = parts.indexOf("home");
    if(parts.includes("user")) limit = parts.indexOf("home");

    return parts.slice(0, ++limit).join("/");
  }

  private _getPreviousRoute(): string { return this.breadcrumbModel[this.breadcrumbModel.length-2].routerLink; }
}
