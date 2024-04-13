import { AbstractDTO } from "../../AbstractDTO";
import { CategoryDTO } from "./CategoryDTO";

export class SubCategoryDTO extends AbstractDTO {
  public name: string;
  public category: CategoryDTO;
}
