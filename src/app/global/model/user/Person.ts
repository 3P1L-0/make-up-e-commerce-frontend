import { AbstractEntity } from "../AbstractEntity";
import { PersonDTO } from "./dto/PersonDTO";

export class Person extends AbstractEntity {
  public getDTO(): PersonDTO { return this.dto(); }
}
