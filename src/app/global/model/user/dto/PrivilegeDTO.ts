import { AbstractDTO } from "../../AbstractDTO";
import { Privilege } from "../Privilege";

export class PrivilegeDTO extends AbstractDTO {
  public granted: boolean;
  public nome: string;

  public toEntity(): Privilege { return new Privilege(this); }
}
