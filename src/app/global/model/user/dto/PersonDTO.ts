import { AbstractDTO } from "../../AbstractDTO";
import { Person } from "../Person";
import { SexoDTO } from "./SexoDTO";

export class PersonDTO extends AbstractDTO {
  public name: string;
  public surname: string;
  public gender: SexoDTO;

  public toEntity(): Person { return new Person(this); }
}
