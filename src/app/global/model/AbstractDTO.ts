import { AbstractEntity } from "./AbstractEntity";

export abstract class AbstractDTO {
  public id: number;
  public createdAt: string;
  public lastModifiedAt: string;

  public abstract toEntity(): AbstractEntity;
}
