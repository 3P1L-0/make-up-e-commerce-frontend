import { FileDTO } from "../../FileDTO";
import { BrandDTO } from "./BrandDTO";
import { CategoryDTO } from "./CategoryDTO";
import { ProductVariantDTO } from "./ProductVariantDTO";
import { SaleItemDTO } from "./SaleItemDTO";

export class ProductDTO extends SaleItemDTO {
	public category: CategoryDTO;
	public brand: BrandDTO;
  public img: FileDTO;
	public variants: ProductVariantDTO[];
	public currentAmount;

  public constructor() {
    super();

    this.category = new CategoryDTO();
    this.brand = new BrandDTO();
    this.variants = [];
    this.currentAmount = 0;
  }
}
