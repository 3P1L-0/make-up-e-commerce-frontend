import {AbstractDTO} from "../../AbstractDTO";
import {ServiceDTO} from "../../cart/dto/ServiceDTO";
import {PersonDTO} from "../../user/dto/PersonDTO";
import {UserDTO} from "../../user/dto/UserDTO";
import {InvoiceDTO} from "./InvoiceDTO";

export class AppointmentDTO extends AbstractDTO {
  public service: ServiceDTO;
  public client: PersonDTO;
  public specialist: UserDTO;
  public originalAppointment: AppointmentDTO;
  public invoice: InvoiceDTO;
}
