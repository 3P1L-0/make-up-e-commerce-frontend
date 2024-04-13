import { AbstractDTO } from "../../AbstractDTO";
import { StockOperationType } from "../enums/StockOperationType";
import { ProductVariantDTO } from "./ProductVariantDTO";

export class ProductStockDTO extends AbstractDTO {
	public quantity: number;
	public operationType: StockOperationType;
	public product: ProductVariantDTO;
}
