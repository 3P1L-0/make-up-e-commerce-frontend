import { AbstractDTO } from "../../AbstractDTO";
import { SaleItemState } from "../enums/SaleItemState";
import { SaleItemType } from "../enums/SaleItemType";
import { SaleItemPromotionDTO } from "./SaleItemPromotionDTO";
import {FileDTO} from "../../FileDTO";
import {CategoryDTO} from "./CategoryDTO";
import {BrandDTO} from "./BrandDTO";

export abstract class SaleItemDTO extends AbstractDTO {
  public description: string;
  public code: string;
  public name: string;
  public state: SaleItemState;
  public kind: SaleItemType;
  public isOnSale: boolean;
  public img: FileDTO;
  public category: CategoryDTO;
  public brand: BrandDTO;
  public currentAmount: number;
  public promotions: SaleItemPromotionDTO[];
}
