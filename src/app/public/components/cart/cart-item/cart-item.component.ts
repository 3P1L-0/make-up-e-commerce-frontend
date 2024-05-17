import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {ServiceDTO} from "../../../../global/model/cart/dto/ServiceDTO";
import {ConfirmationService} from "primeng/api";
import {ItemDTO} from "../../../../global/model/cart/dto/ItemDTO";
import {SaleItemDTO} from "../../../../global/model/cart/dto/SaleItemDTO";
import {InputNumber} from "primeng/inputnumber";
import {debounceTime} from "rxjs";
import {ProductDTO} from "../../../../global/model/cart/dto/ProductDTO";

@Component({
  selector: "app-cart-item-view",
  templateUrl: "./cart-item.component.html",
  host: {"class": "app-cart-item-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppCartItemComponent implements OnInit, OnChanges, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _confirmationService = inject(ConfirmationService);

  /* MEMBERS */
  public saleItemName: string;
  @Input() public item: ItemDTO;
  @ViewChild("itemAmount", {read:InputNumber, static: true}) itemAmount: InputNumber;

  public constructor() {
  }

  public ngOnInit() {}

  public ngAfterViewInit() {
    this.itemAmount.onInput.pipe(
      debounceTime(500),
    ).subscribe(v => {
      console.log("É nóiz hihi")
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {}

  public get imgSrc(): string { return this.saleItem?.img.url; }
  public get name(): string { return this.saleItem?.name; }
  public get density(): string { return this.product?.density; }

  public get price(): number {
    if(this.saleItem instanceof ProductDTO) { return this.product?.price; }
    return this.service?.price;
  }

  public removeFromCart(): void {
    this._askForConfirmation(
      "Remover Ítem",
      `Deseja remover o ítem ${this.name} do carrinho?`,
      this.saleItem?.id.toString(),
      () => {
      }
    )
  }

  private _askForConfirmation(header: string, message: string, key: string, accept: () => void): void { this._confirmationService.confirm({ header, message, accept}); }

  public get product(): ProductDTO { return this.saleItem as ProductDTO ?? null; }
  public get service(): ServiceDTO { return this.saleItem as ServiceDTO ?? null; }
  public get saleItem(): SaleItemDTO { return (this.item?.product ? this.item?.product : this.item?.service) as SaleItemDTO; }
}
