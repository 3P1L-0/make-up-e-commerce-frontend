import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {Router} from "@angular/router";
import {PRIVATE_ROUTES} from "src/app/global/configs";
import {ProductDTO} from "src/app/global/model/cart/dto/ProductDTO";
import {ProductVariantDTO} from "src/app/global/model/cart/dto/ProductVariantDTO";
import {SaleItemDTO} from "src/app/global/model/cart/dto/SaleItemDTO";
import {AppProductService} from "../../../../services/product.service";
import {debounceTime, filter, fromEvent} from "rxjs";

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list.component.html',
  host: {"class": "app-public-product-list-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppProductListComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _router = inject(Router);
  private readonly _productsService = inject(AppProductService);

  /* MEMBERS */
  private _products: ProductDTO[];
  public publicProducts: ProductDTO[];
  private _variants: ProductVariantDTO[];
  public publicVariants: ProductVariantDTO[];
  public searchPlaceholder: string;
  private _isProductsShowing: boolean;
  private _currectSource: SaleItemDTO[];

  @ViewChild("searchField", {read: ElementRef<HTMLInputElement>, static: true}) searchField!: ElementRef<HTMLInputElement>;

  constructor() {
    this.searchPlaceholder = "Filtrar produtos...";
    this._isProductsShowing = true;
  }

  public ngOnInit(): void {
    this._currectSource = this._products;

    this._productsService.fetch().subscribe({
      next: (res) => { this._currectSource = this._products = res; }
    });

    this._productsService.fetchVariants().subscribe({
      next: (res) => { this._variants = res; }
    });

    fromEvent(this.searchField?.nativeElement, "keyup").pipe(
      debounceTime(500)
    ).subscribe(() => {
      if(this._isProductsShowing) this._filterProducts();
    });
  }

  private _filterProducts(): void {
    const res = this._products.filter(p => {
      let matchString = p.name.toLowerCase();
      matchString += p.brand.name.toLowerCase();
      matchString += p.category.name.toLowerCase();
      matchString += p.state.toLowerCase();

      return matchString.includes(this.searchField.nativeElement.value.toLowerCase());
    });

    this.publicProducts = !res.length ? this._products : res;
  }

  private _filterVariants(): void {
    const res = this._variants.filter(p => {
      let matchString = p.name.toLowerCase();
      matchString += p.category.name.toLowerCase();
      matchString += p.state.toLowerCase();
      matchString += p.product.name.toLowerCase();
      matchString += p.price;
      matchString += p.code.toLowerCase();

      return matchString.includes(this.searchField.nativeElement.value.toLowerCase());
    });

    this.publicVariants = !res.length ? this._variants : res;
  }

  public ngAfterViewInit(): void {

  }

  public tabChanged(evt: any): void {
    this._isProductsShowing = evt.index == 0;
  }

  public newProduct(): void { this._router.navigate([PRIVATE_ROUTES.productsForm]).then(); }
}
