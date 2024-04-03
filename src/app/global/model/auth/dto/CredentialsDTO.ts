import { AbstractDTO } from "../../AbstractDTO";
import { Credentials } from "../Credentials";

export class CredentialsDTO extends AbstractDTO {
  public readonly password: string;
  public readonly username: string;

  public toEntity() { return new Credentials(this); }
}
