import {Component, inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Observable, Subscription} from "rxjs";
import {AppNavigationService} from "../../../global/services/navigation.service";

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  host: {"class": "app-view-header-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppViewHeaderComponent implements OnInit, OnDestroy {
  private readonly _activeRoute = inject(ActivatedRoute);
  private readonly _navigationService = inject(AppNavigationService);
  private readonly _subscriptions: Subscription[];

  public viewTitle$: Observable<string>;

  public constructor() {
    this.viewTitle$ = this._navigationService.viewTitleEmitted$;
  }

  public ngOnInit() {
    this._navigationService.requestViewTitle();
  }

  public ngOnDestroy() {
  }
}
