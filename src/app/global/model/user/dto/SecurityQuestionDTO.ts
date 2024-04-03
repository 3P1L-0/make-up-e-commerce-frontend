import { AbstractDTO } from "../../AbstractDTO";
import { SecurityQuestion } from "../SecurityQuestion";

export class SecurityQuestionDTO extends AbstractDTO {
  public question: string;
  public answer: string;

  public toEntity(): SecurityQuestion { return new SecurityQuestion(this); }
}
