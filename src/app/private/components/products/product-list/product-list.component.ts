import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { PUBLIC_ROUTES } from "src/app/global/configs";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";
import { SaleItemDTO } from "src/app/global/model/cart/dto/SaleItemDTO";
import {AppProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {"class": "app-public-product-list-module"}
})
export class AppPublicProductListComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _router = inject(Router);
  private readonly _productsService = inject(AppProductService);
  private readonly _chDetectorRef = inject(ChangeDetectorRef);

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

    this._productsService.fetch().subscribe({
      next: (res) => { this._currectSource = this._products = res; },
      complete: () => { console.log("product service fetch observable completed!")}
    });

    this._productsService.fetchVariants().subscribe({
      next: (res) => { this._variants = res; },
      complete: () => { console.log("variants service fetch observable completed!")}
    });
  }

  public ngAfterViewInit(): void {

  }

  public filter(evt): void {}

  private _filter(searchString: string, collection: SaleItemDTO[]): void {

  }

  public tabChanged(evt: any): void {
    console.log(evt);
    this._isProductsShowing = evt.index == 0;
  }

  public newProduct(): void { this._router.navigate([PUBLIC_ROUTES.products_form]).then(); }
}
