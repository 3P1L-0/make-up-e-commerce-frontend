import { AbstractDTO } from "../../AbstractDTO";
import { DiscountDTO } from "./DiscountDTO";
import { ServiceDTO } from "./ServiceDTO";
import {ProductDTO} from "./ProductDTO";

export class SaleItemPromotionDTO extends AbstractDTO {
	public canceled: boolean;
	public isDue: boolean;
	public isValid: boolean;
	public service: ServiceDTO;
	public product: ProductDTO;
	public discount: DiscountDTO;
}
