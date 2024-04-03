import { AbstractDTO } from "../AbstractDTO";
import { AbstractEntity } from "../AbstractEntity";
import { SexoDTO } from "./dto/SexoDTO";

export class Sexo extends AbstractEntity {
  public getDTO(): AbstractDTO { return this.dto<SexoDTO>(); }
}
