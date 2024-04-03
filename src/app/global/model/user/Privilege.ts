import { AbstractEntity } from "../AbstractEntity";
import { PrivilegeDTO } from "./dto/PrivilegeDTO";

export class Privilege extends AbstractEntity {
  public getDTO(): PrivilegeDTO { return this.dto(); }
}
