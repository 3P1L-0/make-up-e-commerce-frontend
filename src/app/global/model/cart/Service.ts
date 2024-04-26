import { AbstractEntity } from "../AbstractEntity";
import { ProductDTO } from "./dto/ProductDTO";
import {ServiceDTO} from "./dto/ServiceDTO";

export class Service extends AbstractEntity {
  public base64Img: string;

  public constructor() {
    super(new ServiceDTO());
  }

  public getDTO(): ServiceDTO { return this.dto(); }
}
