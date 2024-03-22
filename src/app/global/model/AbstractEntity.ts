
export abstract class AbstractEntity {
  private id: number;
  private createdAt: string;
  private lastModifiedAt: string;

  public getId(): number { return this.id; }
  public getCreatedAt(): string { return this.createdAt; }
  public getLastModifiedAt(): string { return this.lastModifiedAt; }
  public getCreatedAtParsed(): Date { return this.parseDate(this.getCreatedAt()); }
  public getLastModifiedAtParsedt(): Date { return this.parseDate(this.getLastModifiedAt()); }
  private parseDate(date: string): Date { return new Date(Date.parse(date)); }
}
