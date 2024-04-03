import { AbstractDTO } from "../../AbstractDTO";
import { Sexo } from "../Sexo";

export class SexoDTO extends AbstractDTO {
  public nome: string;
  public shortName: string;

  public toEntity(): Sexo { return new Sexo(this);}
}
