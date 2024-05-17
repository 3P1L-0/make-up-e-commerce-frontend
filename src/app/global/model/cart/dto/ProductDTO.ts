import { FileDTO } from "../../FileDTO";
import { BrandDTO } from "./BrandDTO";
import { CategoryDTO } from "./CategoryDTO";
import { SaleItemDTO } from "./SaleItemDTO";
import {SaleItemState} from "../enums/SaleItemState";
import {SaleItemType} from "../enums/SaleItemType";
import {ProductStockDTO} from "./ProductStockDTO";

export class ProductDTO extends SaleItemDTO {
  public color: string;
  public density: string;
  public category: CategoryDTO;
  public currentAmount: number;
  public description: string;
  public name: string;
  public state: SaleItemState;
  public kind: SaleItemType;
  public productStock: ProductStockDTO[];

  public constructor() {
    super();

    this.category = new CategoryDTO();
    this.brand = new BrandDTO();
    this.currentAmount = 0;
  }
}
