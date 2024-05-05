import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {PRIVATE_ROUTES} from "src/app/global/configs";
import {AppProductService} from "../../../../services/product.service";
import {BehaviorSubject, debounceTime, filter, fromEvent, map, Observable, of} from "rxjs";
import {Product} from "../../../../../global/model/cart/Product";

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list.component.html',
  host: {"class": "app-public-product-list-module app-sale-item-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppProductListComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _router = inject(Router);
  private readonly _productsService = inject(AppProductService);

  /* MEMBERS */
  private _products: Product[];
  public publicProducts$: BehaviorSubject<Product[]>;

  @ViewChild("searchField", {read: ElementRef<HTMLInputElement>, static: true}) searchField!: ElementRef<HTMLInputElement>;

  public ngOnInit(): void {
    this._productsService.fetch().subscribe(res => { this.publicProducts$.next(this._products = res); });

    fromEvent(this.searchField?.nativeElement, "keyup").pipe(
      debounceTime(500)
    ).subscribe(() => {
      this._filterProducts(this.searchField.nativeElement.value.toLowerCase());
    });
  }

  private _filterProducts(matchString: string): void {
    const res = this._products.filter(p => {
      let r = p.getDTO().category.name;
      r += p.getDTO().name;
      r += p.getDTO().kind;
      r += p.getDTO().code;
      r += p.getDTO().brand.name;
      r += p.getDTO().state;

      return r.toLowerCase().includes(matchString);
    });

    this.publicProducts$.next(res.length ? res : this._products);
  }

  public ngAfterViewInit(): void {

  }

  public newProduct(): void { this._router.navigate([PRIVATE_ROUTES.productsForm]).then(); }
}
