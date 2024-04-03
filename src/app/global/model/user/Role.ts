import { AbstractEntity } from "../AbstractEntity";
import { RoleDTO } from "./dto/RoleDTO";

export class Role extends AbstractEntity {
  public getDTO(): RoleDTO { return this.dto() }
}
