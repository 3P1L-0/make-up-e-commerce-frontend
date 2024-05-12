import { AbstractEntity } from "../AbstractEntity";
import { ProductDTO } from "./dto/ProductDTO";
import {SaleItem} from "./SaleItem";
import {SaleItemDTO} from "./dto/SaleItemDTO";

export class Product extends SaleItem {
  public base64Img: string;

  public constructor(x?: SaleItemDTO) {
    super(!!x ? x : new ProductDTO());
  }

  public getDTO(): ProductDTO { return this.dto(); }
}
