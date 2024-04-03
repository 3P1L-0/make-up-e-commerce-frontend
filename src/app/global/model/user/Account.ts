import { AbstractEntity } from "../AbstractEntity";
import { AccountDTO } from "./dto/AccountDTO";

export class Account extends AbstractEntity {
  public getDTO(): AccountDTO { return this.dto(); }
}
