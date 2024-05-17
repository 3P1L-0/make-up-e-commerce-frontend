import { AbstractDTO } from "../../AbstractDTO";
import { StockOperationType } from "../enums/StockOperationType";
import {ProductDTO} from "./ProductDTO";

export class ProductStockDTO extends AbstractDTO {
	public quantity: number;
	public operationType: StockOperationType;
	public product: ProductDTO;

  public constructor() {
    super();
    this.product = new ProductDTO();
  }
}
