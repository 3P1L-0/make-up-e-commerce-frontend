import { AbstractDTO } from "../../AbstractDTO";
import { User } from "../User";
import { EmployeeSpecialtyDTO } from "./EmployeeSpecialtyDTO";
import { PersonDTO } from "./PersonDTO";
import { PrivilegeDTO } from "./PrivilegeDTO";
import { RoleDTO } from "./RoleDTO";

export class UserDTO extends AbstractDTO {
  public blocked: boolean;
  public person: PersonDTO;
  public role: RoleDTO;
  public privileges: Set<PrivilegeDTO>;
  public specialties: Set<EmployeeSpecialtyDTO>;

  public toEntity(): User { return new User(this); }
}
