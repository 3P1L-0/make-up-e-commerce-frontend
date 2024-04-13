import { AbstractDTO } from "../../AbstractDTO";
import { SaleItemState } from "../enums/SaleItemState";
import { SaleItemType } from "../enums/SaleItemType";
import { SaleItemPromotionDTO } from "./SaleItemPromotionDTO";

export class SaleItemDTO extends AbstractDTO {
  public description: string;
  public code: string;
  public name: string;
  public state: SaleItemState;
  public kind: SaleItemType;
  public isOnSale: boolean;
  public promotions: SaleItemPromotionDTO[];
}
