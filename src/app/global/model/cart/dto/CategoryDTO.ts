import { AbstractDTO } from "../../AbstractDTO";
import { SubCategoryDTO } from "./SubCategoryDTO";

export class CategoryDTO extends AbstractDTO {
  public name: string;
  public subcategories: SubCategoryDTO[];

  public constructor() {
    super();

    this.subcategories = [];
  }
}
