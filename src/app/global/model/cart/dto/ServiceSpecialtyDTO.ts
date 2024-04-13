import { AbstractDTO } from "../../AbstractDTO";
import { ServiceDTO } from "./ServiceDTO";
import { SpecialtyDTO } from "./SpecialtyDTO.ts";
import { SubCategoryDTO } from "./SubCategoryDTO";

export class ServiceSpecialtyDTO extends AbstractDTO {
  public service: ServiceDTO;
  public specialty: SpecialtyDTO;
}
