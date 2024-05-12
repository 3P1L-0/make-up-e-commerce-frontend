import {AbstractDTO} from "../../AbstractDTO";
import {PaymentMethodDTO} from "./PaymentMethodDTO";
import {PaymentMethodDetailsDTO} from "./PaymentMethodDetailsDTO";
import {InvoiceDTO} from "./InvoiceDTO";
import {UserDTO} from "../../user/dto/UserDTO";

export class PaymentDTO extends AbstractDTO {
  public method: PaymentMethodDTO;
  public methodDetails: PaymentMethodDetailsDTO;
  public paidAmount: number;
  public requiredAmount: number;
  public invoice: InvoiceDTO;
  public owner: UserDTO
}
