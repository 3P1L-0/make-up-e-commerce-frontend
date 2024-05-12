import {CartDTO} from "../cart/dto/CartDTO";
import {PaymentDTO} from "../documents/dto/PaymentDTO";
import {BillingAddressDTO} from "../config/BillingAddressDTO";

export class Purchase {
  public cart: CartDTO;
  public payment: PaymentDTO;
  public shippingAddress: BillingAddressDTO
}
