import {AbstractDTO} from "../../AbstractDTO";
import {AppointmentDTO} from "./AppointmentDTO";
import {PurchaseType} from "../../purchase/enums/PurchaseType";
import {ItemDTO} from "../../cart/dto/ItemDTO";

export class InvoiceDTO extends AbstractDTO {
  public appointment: AppointmentDTO;
  public purchaseType: PurchaseType;
  public items: ItemDTO[];
}
