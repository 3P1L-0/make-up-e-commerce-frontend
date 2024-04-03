import { AbstractDTO } from "../../AbstractDTO";
import { Specialty } from "../Specialty";

export class SpecialtyDTO extends AbstractDTO {
  public toEntity(): Specialty { return new Specialty(this); }
}
