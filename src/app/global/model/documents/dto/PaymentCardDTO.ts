import { AbstractDTO } from "../../AbstractDTO"
import { UserDTO } from "../../user/dto/UserDTO";

export class PaymentCardDTO extends AbstractDTO {
  public cardNumber: string
  public expiryDate: string;
  public cve: string
  public nameOnCard: string
  public user: UserDTO;
}
