import { AbstractDTO } from "../AbstractDTO";
import { AbstractEntity } from "../AbstractEntity";
import { SessionDTO } from "./dto/SessionDTO";

export class Session extends AbstractEntity {
  public getDTO(): SessionDTO { return this.dto<SessionDTO>(); }
  public isDeadDate(): boolean { return this.isDateDue(this.getDTO().expiry); }
}
