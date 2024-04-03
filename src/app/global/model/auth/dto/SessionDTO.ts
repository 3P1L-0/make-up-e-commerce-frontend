import { AbstractDTO } from "../../AbstractDTO";
import { AccountDTO } from "../../user/dto/AccountDTO";
import { Session } from "../Session";

export class SessionDTO extends AbstractDTO {
  public expiry: string;
  public active: boolean;
  public account: AccountDTO;

  toEntity(): Session { return new Session(this); }
}
