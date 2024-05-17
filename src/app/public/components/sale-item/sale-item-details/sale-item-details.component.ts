import {Component, inject, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {AppCartService} from "../../cart/cart.service";
import {AppProductService} from "../../../../private/services/product.service";
import {switchMap} from "rxjs";
import {SaleItemDTO} from "../../../../global/model/cart/dto/SaleItemDTO";
import {ItemDTO} from "../../../../global/model/cart/dto/ItemDTO";
import {AppAuthService} from "../../../../global/components/auth/auth.service";
import {SaleItemType} from "../../../../global/model/cart/enums/SaleItemType";
import {ServiceDTO} from "../../../../global/model/cart/dto/ServiceDTO";
import {FormGroup} from "@angular/forms";
import {ProductDTO} from "../../../../global/model/cart/dto/ProductDTO";

@Component({
  selector: 'app-sale-item-details-view',
  templateUrl: './sale-item-details.component.html',
  host: {"class": "sale-item-details-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppSaleItemDetailsComponent implements OnInit {
  private readonly _diagRef = inject(DynamicDialogRef)
  private readonly _diagConf = inject(DynamicDialogConfig);
  private readonly _cartService = inject(AppCartService);
  private readonly _productsService = inject(AppProductService);
  private readonly _authService = inject(AppAuthService);

  service: ServiceDTO;
  product: ProductDTO;
  public itemName: string;
  public variants: ProductDTO[];
  public item: SaleItemDTO;
  public form: FormGroup;

  public ngOnInit(): void {
    if (this._diagConf.data.item instanceof ServiceDTO) this.service = this._diagConf.data.item as ServiceDTO;
    else this.product = this._diagConf.data.item as ProductDTO;

    this.itemName = this.service ? "serviço" : "produto";
  }

  public exit(): void {
    this._diagRef.close();
  }

  public addToCart(): void {
    this._cartService.fetchActiveByOwnerId(this._authService.activeSession.user.id).pipe(
      switchMap(c => {
        const item = new ItemDTO();
        if (this.product) item.product = this.product;
        else item.service = this.service;

        item.quantity = this.form.value.quantity;

        return this._cartService.addItemByCartId(c.id, item)
      })
    )
  }

  public get brand(): string { return (this.item?.kind === SaleItemType.product ? this.productVariant?.brand : this.service?.brand)?.name; }

  public get productVariant(): ProductDTO { return this.item as ProductDTO; }

  public get title(): string { return this.item?.name; }
}
