import { AbstractDTO } from "../../AbstractDTO";
import { DiscountDTO } from "./DiscountDTO";
import { ProductVariantDTO } from "./ProductVariantDTO";
import { ServiceDTO } from "./ServiceDTO";

export class SaleItemPromotionDTO extends AbstractDTO {
	public canceled: boolean;
	public isDue: boolean;
	public isValid: boolean;
	public service: ServiceDTO;
	public product: ProductVariantDTO;
	public discount: DiscountDTO;
}
