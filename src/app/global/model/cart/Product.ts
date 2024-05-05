import { AbstractEntity } from "../AbstractEntity";
import { ProductDTO } from "./dto/ProductDTO";
import {SaleItem} from "./SaleItem";

export class Product extends SaleItem {
  public base64Img: string;

  public getDTO(): ProductDTO { return this.dto(); }
}
