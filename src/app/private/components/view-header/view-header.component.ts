import {Component, inject, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {MenuItem} from "primeng/api";
import {AppViewHeaderService} from "./view-header.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  host: {"class": "app-view-header-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppViewHeaderComponent implements OnInit, OnDestroy {
  private readonly _router = inject(Router);
  private readonly _activeRoute = inject(ActivatedRoute);
  private readonly _location = inject(Location);
  private readonly _navigationService = inject(AppViewHeaderService);

  public viewTitle: string;
  private readonly _routeParts: string[];
  public breadcrumbModel: MenuItem[];
  private _subscriptions: Subscription[];

  constructor() {
    this.breadcrumbModel = [];
    this._subscriptions = [];
  }

  public ngOnInit() {
    this._buildBreadcrumb();
    this._subscriptions.push(this._navigationService.goBackRequested$.subscribe(navigate => {
      if(navigate) this._router.navigate([this._getPreviousRoute()]).then();
    }))
  }

  public ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  private _buildBreadcrumb(): void {
    this.viewTitle = this._activeRoute.snapshot.routeConfig.title as string;
    const root = location.hash.slice(1);
    const parts = root.split("/").filter(p => p.trim().length > 0).slice(2);
    const section = parts[0];
    const home = root.slice(0, root.indexOf(parts[0])).slice(0,-1);
    const currentView = parts[parts.length-1];

    this.breadcrumbModel.push({
      label: "Início",
      routerLink: home,
    });

    parts.forEach(p => {
      this.breadcrumbModel.push({
        label: p,
        routerLink: root.slice(0, root.indexOf(p)).concat(p)
      });
    });
  }

  private _getPreviousRoute(): string { return this.breadcrumbModel[this.breadcrumbModel.length-2].routerLink; }
}
