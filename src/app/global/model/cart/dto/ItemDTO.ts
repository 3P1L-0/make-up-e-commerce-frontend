import {AbstractDTO} from "../../AbstractDTO";
import {ServiceDTO} from "./ServiceDTO";
import {SaleItemPromotionDTO} from "./SaleItemPromotionDTO";
import {InvoiceDTO} from "../../documents/dto/InvoiceDTO";
import {CartDTO} from "./CartDTO";
import {OrderDTO} from "../../documents/dto/OrderDTO";
import {ProductDTO} from "./ProductDTO";

export class ItemDTO extends AbstractDTO {
  public quantity: number;
  public price: number;
  public service: ServiceDTO;
  public product: ProductDTO;
  public promotion: SaleItemPromotionDTO;
  public invoice: InvoiceDTO;
  public cart: CartDTO;
  public order: OrderDTO
  public total: number;
  public discountedPrice: number;
  public finalPrice: number;
}
