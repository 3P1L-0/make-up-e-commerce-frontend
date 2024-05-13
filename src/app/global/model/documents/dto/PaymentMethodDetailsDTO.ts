import {AbstractDTO} from "../../AbstractDTO";

export class PaymentMethodDetailsDTO extends AbstractDTO {
  public cardNumber: string;
  public cardName: string;
  public expiryMonth: string;
  public expiryYear: string;
  public cve: string;
}
