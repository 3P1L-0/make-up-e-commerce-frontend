import { AbstractDTO } from "../../AbstractDTO";
import { Gender } from "../Gender";

export class GenderDTO extends AbstractDTO {
  public name: string;
  public shortName: string;
}
