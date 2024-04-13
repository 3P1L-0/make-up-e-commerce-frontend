import { CategoryDTO } from "./CategoryDTO";
import { ProductDTO } from "./ProductDTO";
import { SaleItemDTO } from "./SaleItemDTO";

export class ProductVariantDTO extends SaleItemDTO {
	public price: number;
	public color: string;
	public tone: string;
	public density: string;
	public category: CategoryDTO;
	public product: ProductDTO;
	public currentAmount: number;
}
