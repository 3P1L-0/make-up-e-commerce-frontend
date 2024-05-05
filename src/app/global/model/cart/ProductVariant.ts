import {AbstractEntity} from "../AbstractEntity";
import {ProductVariantDTO} from "./dto/ProductVariantDTO";

export class ProductVariant extends AbstractEntity {
  public getDTO(): ProductVariantDTO { return this._dto as ProductVariantDTO; }
}
