import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppNavigationService} from "../../../global/services/navigation.service";

@Component({
  selector: 'app-sale-item-view',
  templateUrl: './sale-item.component.html',
  host: {"class": "sale-item-module"}
})
export class AppSaleItemComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _navigationService = inject(AppNavigationService)

  constructor() {
    this._navigationService.viewTitleRequested$.subscribe(t => {
      this._navigationService.requestViewTitleEmitted(this._activatedRoute.routeConfig.title as string)
    })
  }

  ngOnInit(): void {
  }
}
