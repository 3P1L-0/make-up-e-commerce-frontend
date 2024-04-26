import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {SpecialtyDTO} from "../../global/model/cart/dto/SpecialtyDTO.ts";
import {SPECIALTY_API} from "../../global/configs";

@Injectable({providedIn: "root"})
export class AppSpecialtyService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;

  public fetch(): Observable<SpecialtyDTO[]> {
    return this._http.get<SpecialtyDTO[]>(this._url+SPECIALTY_API.fetch);
  }

  public fetchByID(id: number): Observable<SpecialtyDTO> {
    return this._http.get<SpecialtyDTO>(this._url+SPECIALTY_API.getById+id);
  }

  public update(specialty: SpecialtyDTO): Observable<SpecialtyDTO> {
    return this._http.put<SpecialtyDTO>(this._url+SPECIALTY_API.update, specialty);
  }

  public deleteById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+SPECIALTY_API.deleteById+id);
  }

  public createList(specialties: SpecialtyDTO[]): Observable<SpecialtyDTO[]> {
    return this._http.post<SpecialtyDTO[]>(this._url+SPECIALTY_API.createList, specialties);
  }
}
