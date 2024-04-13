import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";

@Component({
  selector: "app-public-products-table-view",
  templateUrl: "./products-table.component.html",
  host: {"class": "app-public-products-table"}
})
export class AppPublicProductsTable implements AfterViewInit, OnChanges {
  /* MEMBERS */
  @Input() products: ProductDTO[];
  public datasource: MatTableDataSource<ProductDTO>;
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
