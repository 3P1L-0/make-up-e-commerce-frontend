import {AbstractDTO} from "../AbstractDTO";

export class BillingAddressDTO extends AbstractDTO {
  public name: string;
  private surname: string;
  private street: string;
  private houseNumber: string;
  private state: string;
  private country: string;
  private city: string;
  private addressLine1: string;
  private addressLine2: string;
  private zipCode: string;
  private main: boolean;
}
