import { AbstractDTO } from "../../AbstractDTO";
import { Credentials } from "../Credentials";

export class CredentialsDTO extends AbstractDTO {
  public password: string;
  public username: string;
  public email: string;
}
