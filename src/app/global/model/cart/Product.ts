import { AbstractEntity } from "../AbstractEntity";
import { ProductDTO } from "./dto/ProductDTO";

export class Product extends AbstractEntity {
  public base64Img: string;

  public getDTO(): ProductDTO { return this.dto(); }
}
