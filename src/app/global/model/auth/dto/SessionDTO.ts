import { AbstractDTO } from "../../AbstractDTO";
import { AccountDTO } from "../../user/dto/AccountDTO";
import { UserDTO } from "../../user/dto/UserDTO";
import { Session } from "../Session";

export class SessionDTO extends AbstractDTO {
  public expiry: string;
  public active: boolean;
  public user: UserDTO;
}
