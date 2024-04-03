import { AbstractDTO } from "./AbstractDTO";

export abstract class AbstractEntity {
  public constructor(protected readonly _dto: AbstractDTO) {}

  public getId(): number { return this._dto.id; }
  public getCreatedAt(): string { return this._dto.createdAt; }
  public getLastModifiedAt(): string { return this._dto.lastModifiedAt; }
  public getCreatedAtParsed(): Date { return this.parseDate(this.getCreatedAt()); }
  public getLastModifiedAtParsedt(): Date { return this.parseDate(this.getLastModifiedAt()); }
  protected parseDate(date: string): Date { return new Date(Date.parse(date)); }
  public checkEqualStrings(s1: string, s2: string): boolean { return s1.length === s2.length && s1.includes(s2); }
  protected dto<T extends AbstractDTO>(): T { return this._dto as T; }
  public abstract getDTO(): AbstractDTO;
  protected isDateDue(date: string) { return Date.parse(date) < Date.now(); }
}
