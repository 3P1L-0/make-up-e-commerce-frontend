import { AbstractDTO } from "../../AbstractDTO";
import { EmployeeSpecialty } from "../EmployeeSpecialty";
import { UserDTO } from "./UserDTO";
import {SpecialtyDTO} from "../../cart/dto/SpecialtyDTO.ts";

export class EmployeeSpecialtyDTO extends AbstractDTO {
  public specialty: SpecialtyDTO;
  public user: UserDTO;
}
