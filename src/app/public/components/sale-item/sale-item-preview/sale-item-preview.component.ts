import {Component, inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {AppSaleItemDetailsComponent} from "../sale-item-details/sale-item-details.component";
import {SaleItemDTO} from "../../../../global/model/cart/dto/SaleItemDTO";
import {SaleItemType} from "../../../../global/model/cart/enums/SaleItemType";
import {ServiceDTO} from "../../../../global/model/cart/dto/ServiceDTO";
import {FileDTO} from "../../../../global/model/FileDTO";
import {ProductDTO} from "../../../../global/model/cart/dto/ProductDTO";

@Component({
  selector: 'app-sale-item-preview-view',
  templateUrl: './sale-item-preview.component.html',
  host: {"class": "sale-item-preview-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppSaleItemPreviewComponent implements OnInit {
  private readonly _diagService = inject(DialogService)

  public itemName: string;
  @Input() public item: SaleItemDTO;

  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
    this.itemName = this.item.kind === SaleItemType.product ? "produto" : "serviço";
    console.log(this.item);
  }

  public showDetails(): void {
    this._diagService.open(
      AppSaleItemDetailsComponent,
      {
        data: { item: this.item },
        width: "100vw",
        height: "100vh",
        closeOnEscape: false,
        resizable: false,
        draggable: false,
        maskStyleClass: "dialog-anchor",
        showHeader: false,
      }
    )
  }

  public get price(): number {
    return (this.isProduct ? this.product : this.service)?.price
  }

  public addToCart(): void {}
  public get smallText(): string { return (this.isProduct ? this.product?.brand : this.service?.category)?.name; }

  public get isProduct(): boolean { return this.item?.kind !== SaleItemType.product; }

  public get product(): ProductDTO { return this.item as ProductDTO; }
  public get service(): ServiceDTO { return this.item as ServiceDTO; }
  public get img(): FileDTO { return (this.isProduct ? this.product: this.service)?.img; }
}
