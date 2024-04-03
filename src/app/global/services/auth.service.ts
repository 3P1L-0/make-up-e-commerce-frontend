import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { Session } from "../model/auth/Session";
import { AUTH_API, LOCAL_STORAGE } from "../configs";
import { Observable, map } from "rxjs";
import { SessionDTO } from "../model/auth/dto/SessionDTO";
import { CredentialsDTO } from "../model/auth";
import { AbstractEntity } from "../model/AbstractEntity";
import { AbstractDTO } from "../model/AbstractDTO";
import { AbstractService } from "./abstract-service";

@Injectable({providedIn: 'root'})
export class AppAuthService extends AbstractService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _api = environment.api;

  /* DEPENDENCIES */
  private readonly _httpClient = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public signIn(creds: CredentialsDTO): Observable<Session> {
    return this.toEntity(this._http.post<SessionDTO>(this._api+AUTH_API.signIn, creds)).pipe(
      map((e: Session) => {
        if(e == null) return null;

        localStorage.setItem(LOCAL_STORAGE.session, JSON.stringify(e));
        console.log("signed in");

        return e;
      }
    ));
  }

  public isSessionAlive(): boolean {
    try {
      return (JSON.parse(localStorage.getItem(LOCAL_STORAGE.session)) as Session).isAlive();
    } catch (error) {
      console.log("not signed in");
      return;
    }
  }

  isSignedIn(): boolean {
    return localStorage.getItem(LOCAL_STORAGE.session) != null;
  }
}
