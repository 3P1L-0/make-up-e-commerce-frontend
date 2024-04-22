import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";

@Component({
  selector: "app-public-products-table-view",
  templateUrl: "./products-table.component.html",
  host: {"class": "app-public-products-table"}
})
export class AppPublicProductsTable implements AfterViewInit, OnChanges {
  /* MEMBERS */
  @Input() products: ProductDTO[];
  public datasource: Array<ProductDTO>;
  public readonly columns: string[];

  constructor() {
    this.datasource = [];
    this.columns = ['name', 'inventory', 'category', 'variants'];
  }

  public ngAfterViewInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    const products = changes.products;
    if(!(products.currentValue || products.previousValue)) return;

    this.products = products.currentValue;
  }
}
