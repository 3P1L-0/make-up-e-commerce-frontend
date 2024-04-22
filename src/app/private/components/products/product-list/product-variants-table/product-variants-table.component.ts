import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";

@Component({
  selector: "app-public-variants-table-view",
  templateUrl: "./product-variants-table.component.html",
  host: {"class": "app-public-product-variants-table"}
})
export class AppPublicProductVariantsTable implements AfterViewInit, OnChanges {
  /* MEMBERS */
  @Input() variants: ProductVariantDTO[];
  public datasource: Array<ProductVariantDTO>;
  public readonly columns: string[];

  constructor() {
    this.datasource = [];
    this.columns = ['name', 'inventory', 'category', 'variants'];
  }

  public ngAfterViewInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.datasource = changes.prop.currentValue;
  }
}
