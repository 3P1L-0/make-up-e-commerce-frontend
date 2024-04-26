import { AbstractDTO } from "../../AbstractDTO";

export class DurationDTO extends AbstractDTO {
  public days: number;
  public hours: number;
  public minutes: number;

  public constructor(d: number, h: number, m: number) {
    super();

    this.days = d;
    this.hours = h;
    this.minutes = m;
  }
}
