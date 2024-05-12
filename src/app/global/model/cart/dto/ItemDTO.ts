import {AbstractDTO} from "../../AbstractDTO";
import {ServiceDTO} from "./ServiceDTO";
import {ProductVariantDTO} from "./ProductVariantDTO";
import {SaleItemPromotionDTO} from "./SaleItemPromotionDTO";
import {InvoiceDTO} from "../../documents/dto/InvoiceDTO";
import {CartDTO} from "./CartDTO";
import {OrderDTO} from "../../documents/dto/OrderDTO";

export class ItemDTO extends AbstractDTO {
  public quantity: number;
  public price: number;
  public service: ServiceDTO;
  public product: ProductVariantDTO;
  public promotion: SaleItemPromotionDTO;
  public invoice: InvoiceDTO;
  public cart: CartDTO;
  public order: OrderDTO
}
