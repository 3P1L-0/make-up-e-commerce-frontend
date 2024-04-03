import { AbstractDTO } from "../../AbstractDTO";
import { EmployeeSpecialty } from "../EmployeeSpecialty";
import { SpecialtyDTO } from "./SpecialtyDTO";
import { UserDTO } from "./UserDTO";

export class EmployeeSpecialtyDTO extends AbstractDTO {
  public specialty: SpecialtyDTO;
  public user: UserDTO;

  public toEntity(): EmployeeSpecialty { return new EmployeeSpecialty(this); }
}
