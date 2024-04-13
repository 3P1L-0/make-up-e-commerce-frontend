import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { Session } from "../../model/auth/Session";
import { AUTH_API, LOCAL_STORAGE, PUBLIC_ROUTES } from "../../configs";
import { Observable, map, of, tap } from "rxjs";
import { SessionDTO } from "../../model/auth/dto/SessionDTO";
import { CredentialsDTO } from "../../model/auth";
import { AccountDTO } from "../../model/user/dto/AccountDTO";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AppAuthService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _api = environment.api;
  private readonly _router = inject(Router);

  /* MEMBERS */
  private readonly _url = environment.api;

  public signIn(creds: CredentialsDTO): Observable<Session> {
    return this._http.post<SessionDTO>(this._api+AUTH_API.signIn, creds).pipe(
      map(dto => {
        if(dto == null) return null;

        delete dto.user.role.privileges; // hide role privileges

        localStorage.setItem(LOCAL_STORAGE.session, JSON.stringify(dto));

        return new Session(dto);
      }
    ));
  }

  public signOut(): Observable<boolean> {
    if (this.isSessionAlive) {
      try {
        const session = JSON.parse(localStorage.getItem(LOCAL_STORAGE.session)) as SessionDTO;
        console.log(session);

        return this._http.get<boolean>(this._url+AUTH_API.signOut+ session.id).pipe(
          tap(res => {
            if(!res) return;
            localStorage.removeItem(LOCAL_STORAGE.session);
          })
        );
      } catch (err) {
        console.log(err.message);

        return of(false);
      }
    } else return of(false);
  }

  public isSessionAlive(): boolean {
    try {
      return (JSON.parse(localStorage.getItem(LOCAL_STORAGE.session)) as Session).isAlive();
    } catch (error) {
      console.log("not signed in");
      return false;
    }
  }

  isSignedIn(): boolean {
    return localStorage.getItem(LOCAL_STORAGE.session) != null;
  }

  public isUsernameTaken(username: string): Observable<boolean> {
    const creds = new CredentialsDTO();
    creds.username = username;

    return this._http.post<boolean>(this._url+AUTH_API.isUnavailable, creds);
  }

  private addToLocalStorage(dto: SessionDTO): void {
    /* localStorage.setItem(LOCAL_STORAGE.user, dto.user); */
  }

  signUp(account: AccountDTO): void {
    this._http.post<SessionDTO>(this._url+AUTH_API.signUp, account).subscribe(session => {
      if(session === null) return;
      localStorage.setItem(LOCAL_STORAGE.session, JSON.stringify(session));
      this._router.navigate([PUBLIC_ROUTES.home]);
    });
  }
}
