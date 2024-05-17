import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppNavigationService} from "../../../global/services/navigation.service";
import {AppProductService} from "../../../private/services/product.service";
import {AppServiceService} from "../../../private/services/services.service";
import {ServiceDTO} from "../../../global/model/cart/dto/ServiceDTO";
import {SaleItemDTO} from "../../../global/model/cart/dto/SaleItemDTO";
import {ProductDTO} from "../../../global/model/cart/dto/ProductDTO";
import {map} from "rxjs";

@Component({
  selector: 'app-sale-item-view',
  templateUrl: './sale-item.component.html',
  host: {"class": "sale-item-module"}
})
export class AppSaleItemComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _navigationService = inject(AppNavigationService)
  private readonly _productsService = inject(AppProductService);
  private readonly _servicesService = inject(AppServiceService);
  public saleItems: SaleItemDTO[];
  private products: ProductDTO[];
  private services: ServiceDTO[];

  constructor() {
    this.saleItems = [];
    this._navigationService.viewTitleRequested$.subscribe(t => {
      this._navigationService.requestViewTitleEmitted(this._activatedRoute.routeConfig.title as string)
    })
  }

  ngOnInit(): void {
    this._servicesService.fetch().subscribe(res => {
      this.saleItems.push(...res);
    })

    this._productsService.fetch().pipe(map(p => p.map(e => e.getDTO()))).subscribe(res => {
      this.saleItems.push(...res);
    });
  }
}
