import { FileDTO } from "../../FileDTO";
import { BrandDTO } from "./BrandDTO";
import { CategoryDTO } from "./CategoryDTO";
import { ProductVariantDTO } from "./ProductVariantDTO";
import { SaleItemDTO } from "./SaleItemDTO";

export class ProductDTO extends SaleItemDTO {
  public variants: ProductVariantDTO[];

  public constructor() {
    super();

    this.category = new CategoryDTO();
    this.brand = new BrandDTO();
    this.variants = [];
    this.currentAmount = 0;
  }
}
