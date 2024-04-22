import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { Session } from "../../model/auth/Session";
import { AUTH_API, LOCAL_STORAGE, PUBLIC_ROUTES } from "../../configs";
import { Observable, fromEvent, map, of, switchMap, tap } from "rxjs";
import { SessionDTO } from "../../model/auth/dto/SessionDTO";
import { CredentialsDTO } from "../../model/auth";
import { AccountDTO } from "../../model/user/dto/AccountDTO";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AppAuthService implements OnInit {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _api = environment.api;
  private readonly _router = inject(Router);

  /* MEMBERS */
  private readonly _url = environment.api;

  public ngOnInit(): void {
    console.log("loading auth service");
  }

  public validateSession(): void {
    if(this.isSessionAlive) {
      fromEvent(document, "load").pipe(
        switchMap(() => this._fetchById(this.activeSession.id))
      ).subscribe(resp => {
        if(!resp) this._destroySession();
      }).unsubscribe();
    }
  }

  public signIn(creds: CredentialsDTO): Observable<Session> {
    return this._http.post<SessionDTO>(this._api+AUTH_API.signIn, creds).pipe(
      map(dto => {
        if(dto == null) return null;

        delete dto.user.role.privileges; // hide role privileges

        this.addToLocalStorage(dto);

        return new Session(dto);
      }
    ));
  }

  private _destroySession(): void { localStorage.removeItem(LOCAL_STORAGE.session); }

  public signOut(): Observable<boolean> {
    try {
      if (this.isSessionAlive) {
        return this._http.get<boolean>(this._url+AUTH_API.signOut+this.activeSession.id).pipe(
          tap(res => {
            if(!res) return;
            this._destroySession();
          })
        );
      } else return of(false);
    } catch (err) { return of(false); }
  }

  public isSessionAlive(): boolean {
    try { return new Session(this.activeSession).isAlive(); }
    catch (error) { return false; }
  }

  isSignedIn(): boolean { return this.activeSession != null; }

  public isUsernameTaken(username: string): Observable<boolean> {
    const creds = new CredentialsDTO();
    creds.username = username;

    return this._http.post<boolean>(this._url+AUTH_API.isUnavailable, creds);
  }

  private addToLocalStorage(dto: SessionDTO): void {
    localStorage.setItem(LOCAL_STORAGE.session, JSON.stringify(dto));
  }

  signUp(account: AccountDTO): void {
    this._http.post<SessionDTO>(this._url+AUTH_API.signUp, account).subscribe(session => {
      if(session === null) return;
      this.addToLocalStorage(session);
      this._router.navigate([PUBLIC_ROUTES.home]);
    });
  }

  public get activeSession(): SessionDTO {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE.session)) as SessionDTO;
    } catch(err) {
      console.error("error while parsing actice session:");
      console.error(err);
    }
  }

  private _fetchById(id: number): Observable<SessionDTO> { return this._http.get<SessionDTO>(this._url+AUTH_API.getById+id); }
}
