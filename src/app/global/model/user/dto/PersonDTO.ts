import { AbstractDTO } from "../../AbstractDTO";
import { Person } from "../Person";
import { GenderDTO } from "./GenderDTO";

export class PersonDTO extends AbstractDTO {
  public name: string;
  public surname: string;
  public gender: GenderDTO;
}
