import { Observable, map } from "rxjs";
import { AbstractDTO } from "../model/AbstractDTO";
import { AbstractEntity } from "../model/AbstractEntity";

export class AbstractService {
  protected toEntity<T extends AbstractEntity, D extends AbstractDTO>(obs: Observable<D>): Observable<T> {
    return obs.pipe(map(dto => dto.toEntity())) as Observable<T>;
  }
}
