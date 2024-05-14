import { AbstractDTO } from "../../AbstractDTO";
import { User } from "../User";
import { EmployeeSpecialtyDTO } from "./EmployeeSpecialtyDTO";
import { PersonDTO } from "./PersonDTO";
import { PrivilegeDTO } from "./PrivilegeDTO";
import { RoleDTO } from "./RoleDTO";
import {FileDTO} from "../../FileDTO";

export class UserDTO extends AbstractDTO {
  public blocked: boolean;
  public person: PersonDTO;
  public role: RoleDTO;
  public privileges: Array<PrivilegeDTO>;
  public specialties: Array<EmployeeSpecialtyDTO>;
  public img: FileDTO;
}
