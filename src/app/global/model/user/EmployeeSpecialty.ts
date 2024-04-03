import { AbstractEntity } from "../AbstractEntity";
import { EmployeeSpecialtyDTO } from "./dto/EmployeeSpecialtyDTO";

export class EmployeeSpecialty extends AbstractEntity {
  public getDTO(): EmployeeSpecialtyDTO { return this.dto(); }
}
