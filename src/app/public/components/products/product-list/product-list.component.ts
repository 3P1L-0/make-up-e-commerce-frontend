import { AfterViewInit, Component, OnInit, inject } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";
import { SaleItemDTO } from "src/app/global/model/cart/dto/SaleItemDTO";
import { AppProductService } from "src/app/public/services/product.service";

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list.component.html',
  host: {"class": "app-public-product-list-module"}
})
export class AppPublicProductListComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _productsService = inject(AppProductService);

  /* MEMBERS */
  private _products: ProductDTO[];
  public publicProducts: ProductDTO[];
  private _variants: ProductVariantDTO[];
  public publicVariants: ProductDTO[];
  public searchPlaceholder: string;
  private _isProductsShowing: boolean;
  private _currectSource: SaleItemDTO[];

  constructor() {
    this.searchPlaceholder = "Filtrar produtos...";
    this._isProductsShowing = true;
  }

  public ngOnInit(): void {
    this._currectSource = this._products;
    this._productsService.fetch().subscribe(res => { this._products = res; });
    this._productsService.fetchVariants().subscribe(res => { this._variants = res; });
  }

  public ngAfterViewInit(): void {

  }

  public filter(evt): void {}

  private _filter(searchString: string, collection: SaleItemDTO[]): void {

  }

  public tabChanged(evt: MatTabChangeEvent): void {
    console.log(evt);
    this._isProductsShowing = evt.index == 0;
  }
}
