import { AbstractEntity } from "./AbstractEntity";

export abstract class AbstractDTO {
  public id: number;
  public createdAt: string;
  public lastModifiedAt: string;

  public static toEntity<E extends AbstractEntity, D extends AbstractDTO>(dto: D, className: string): E {
    const e = eval(``) as E;

    return e;
  }
}
