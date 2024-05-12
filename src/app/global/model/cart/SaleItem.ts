import {AbstractEntity} from "../AbstractEntity";
import {AbstractDTO} from "../AbstractDTO";
import {SaleItemDTO} from "./dto/SaleItemDTO";

export abstract class SaleItem extends AbstractEntity {
  public abstract getDTO(): SaleItemDTO;
}
