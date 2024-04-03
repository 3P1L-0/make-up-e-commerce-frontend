import { AbstractEntity } from "../AbstractEntity";
import { SpecialtyDTO } from "./dto/SpecialtyDTO";

export class Specialty extends AbstractEntity {
  public getDTO(): SpecialtyDTO {
    return this.dto();
  }
}
