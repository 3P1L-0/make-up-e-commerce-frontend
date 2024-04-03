import { AbstractEntity } from "../AbstractEntity";
import { UserDTO } from "./dto/UserDTO";

export class User extends AbstractEntity {
  public getDTO(): UserDTO { return this.dto(); }
}
