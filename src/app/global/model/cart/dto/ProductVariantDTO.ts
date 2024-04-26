import { CategoryDTO } from "./CategoryDTO";
import { ProductDTO } from "./ProductDTO";
import { SaleItemDTO } from "./SaleItemDTO";
import {SaleItemState} from "../enums/SaleItemState";
import {SaleItemType} from "../enums/SaleItemType";
import {ProductStockDTO} from "./ProductStockDTO";

export class ProductVariantDTO extends SaleItemDTO {
	public price: number;
	public color: string;
	public density: string;
	public category: CategoryDTO;
	public product: ProductDTO;
	public currentAmount: number;
  public description: string;
  public name: string;
  public state: SaleItemState;
  public kind: SaleItemType;
  public productStock: ProductStockDTO[];
}
