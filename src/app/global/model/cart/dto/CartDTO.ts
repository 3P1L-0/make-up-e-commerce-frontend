import {AbstractDTO} from "../../AbstractDTO";
import {PersonDTO} from "../../user/dto/PersonDTO";
import {CartState} from "../enums/CartState";
import {UserDTO} from "../../user/dto/UserDTO";
import {ItemDTO} from "./ItemDTO";

export class CartDTO extends AbstractDTO {
  public client: PersonDTO;
  public state: CartState;
  public owner: UserDTO;
  public items: ItemDTO[];
  public servicesSubtotal: number;
  public productsSubtotal: number;
  public total: number;
  public totalWithDiscount: number;
}
