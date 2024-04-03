import { AbstractEntity } from "../AbstractEntity";
import { SecurityQuestionDTO } from "./dto/SecurityQuestionDTO";

export class SecurityQuestion extends AbstractEntity {
  public getDTO(): SecurityQuestionDTO { return this.dto(); }
}
