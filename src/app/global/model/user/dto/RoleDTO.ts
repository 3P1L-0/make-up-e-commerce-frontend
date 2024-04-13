import { AbstractDTO } from "../../AbstractDTO";
import { Role } from "../Role";
import { PrivilegeDTO } from "./PrivilegeDTO";

export class RoleDTO extends AbstractDTO {
  public nome: string;
  public employee: boolean;
  public privileges: Array<PrivilegeDTO>;
}
