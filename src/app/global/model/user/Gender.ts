import { AbstractDTO } from "../AbstractDTO";
import { AbstractEntity } from "../AbstractEntity";
import { GenderDTO } from "./dto/GenderDTO";

export class Gender extends AbstractEntity {
  public getDTO(): GenderDTO { return this.dto<GenderDTO>(); }
}
