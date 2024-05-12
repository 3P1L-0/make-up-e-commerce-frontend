import {AbstractDTO} from "../../AbstractDTO";
import {OrderState} from "../enums/OrderState";
import {PersonDTO} from "../../user/dto/PersonDTO";
import {BillingAddressDTO} from "../../config/BillingAddressDTO";
import {InvoiceDTO} from "./InvoiceDTO";

export class OrderDTO extends AbstractDTO {
  public state: OrderState;
  public orderNumber: string;
  public datePurchased: string;
  public dateDelivered: string;
  public totalAmount: number;
  public client: PersonDTO;
  public shippingAddress: BillingAddressDTO;
  public invoice: InvoiceDTO;
}
