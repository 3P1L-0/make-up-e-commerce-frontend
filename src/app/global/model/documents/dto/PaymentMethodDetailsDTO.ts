import {AbstractDTO} from "../../AbstractDTO";

export class PaymentMethodDetailsDTO extends AbstractDTO {
  public cardNumber: string;
  public expiryDate: string;
  public cve: string;
}
