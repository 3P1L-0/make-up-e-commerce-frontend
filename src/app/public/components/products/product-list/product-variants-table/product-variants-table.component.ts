import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";

@Component({
  selector: "app-public-variants-table-view",
  templateUrl: "./product-variants-table.component.html",
  host: {"class": "app-public-product-variants-table"}
})
export class AppPublicProductVariantsTable implements AfterViewInit, OnChanges {
  /* MEMBERS */
  @Input() variants: ProductVariantDTO[];
  public datasource: MatTableDataSource<ProductVariantDTO>;
  public readonly columns: string[];

  constructor() {
    this.datasource = new MatTableDataSource();
    this.columns = ['name', 'inventory', 'category', 'variants'];
  }

  public ngAfterViewInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.datasource.data = changes.prop.currentValue;
  }
}
