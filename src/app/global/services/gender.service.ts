import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { GenderDTO } from "../model/user/dto/GenderDTO";
import { GENDER_API } from "../configs";
import { Gender } from "../model/user/Gender";

@Injectable({providedIn: "root"})
export class AppGenderService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  fetch(): Observable<Gender[]> { return this._http.get<GenderDTO[]>(this._url+GENDER_API.fetch).pipe(map(g => g.map(s => new Gender(s)))); }

  getById(id: number): Observable<Gender> { return this._http.get<GenderDTO>(this._url+GENDER_API.getById+id).pipe(map(r => new Gender(r))); }
}
