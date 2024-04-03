import { AbstractDTO } from "../../AbstractDTO";
import { CredentialsDTO } from "../../auth";
import { Account } from "../Account";
import { SecurityQuestionDTO } from "./SecurityQuestionDTO";
import { UserDTO } from "./UserDTO";

export class AccountDTO extends AbstractDTO {
  public user: UserDTO;
  public credentials: CredentialsDTO;
  public securityQuestions: Set<SecurityQuestionDTO>;
  public toEntity() { return new Account(this); }
}
