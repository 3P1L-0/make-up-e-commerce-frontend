import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PERSON_API } from "src/app/global/configs";
import { PersonDTO } from "src/app/global/model/user/dto/PersonDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PersonService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public getById(id: number): Observable<PersonDTO> {
    return this._http.get<PersonDTO>(this._url + PERSON_API.getById + id);
  }

  public fetchAll(id: number): Observable<PersonDTO> {
    return this._http.get<PersonDTO>(this._url + PERSON_API.fetch);
  }

  public fetchByGenderId(id: number): Observable<PersonDTO> {
    return this._http.get<PersonDTO>(this._url + PERSON_API.fetchByGenderId + id);
  }

  public save(role?: PersonDTO, person?: PersonDTO[]): Observable<PersonDTO> | Observable<PersonDTO[]> {
    if (role !== undefined || role !== null) {
      return this._http.post<PersonDTO>(this._url + PERSON_API.create, role);
    }
    return this._http.post<PersonDTO[]>(this._url + PERSON_API.createList, person);
  }

  public modify(roleMethod: PersonDTO): Observable<PersonDTO> {
    return this._http.post<PersonDTO>(this._url + PERSON_API.update, roleMethod);
  }

  public delete(id?: number, person?: PersonDTO[]): Observable<void> {
    if (person === undefined || person === null) {
      return this._http.delete<void>(this._url + PERSON_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + PERSON_API.deleteList, { body: person });
  }
}
