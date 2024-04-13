import { BrandDTO } from "./BrandDTO";
import { CategoryDTO } from "./CategoryDTO";
import { ProductVariantDTO } from "./ProductVariantDTO";
import { SaleItemDTO } from "./SaleItemDTO";

export class ProductDTO extends SaleItemDTO {
	public category: CategoryDTO;
	public brand: BrandDTO;
	public variants: ProductVariantDTO[];
	public currentAmount;
}
