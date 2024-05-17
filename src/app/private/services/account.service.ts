import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ACCOUNT_API } from "src/app/global/configs/routes/api/account";
import { AccountDTO } from "src/app/global/model/user/dto/AccountDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public getById(id: number): Observable<AccountDTO> {
    return this._http.get<AccountDTO>(this._url + ACCOUNT_API.getById + id);
  }

  public fetchAll(): Observable<AccountDTO> {
    return this._http.get<AccountDTO>(this._url + ACCOUNT_API.fetchAll);
  }

  public save(account?: AccountDTO, accounts?: AccountDTO[]): Observable<AccountDTO> | Observable<AccountDTO[]> {
    if (account !== undefined || account !== null) {
      return this._http.post<AccountDTO>(this._url + ACCOUNT_API.create, account);
    }
    return this._http.post<AccountDTO[]>(this._url + ACCOUNT_API.createList, accounts);
  }

  public modify(account: AccountDTO): Observable<AccountDTO> {
    return this._http.post<AccountDTO>(this._url + ACCOUNT_API.update, account);
  }

  public modifyCredentials(account: AccountDTO): Observable<AccountDTO> {
    return this._http.post<AccountDTO>(this._url + ACCOUNT_API.update, account);
  }

  public delete(id?: number, accounts?: AccountDTO[]): Observable<void> {
    if (accounts === undefined || accounts === null) {
      return this._http.delete<void>(this._url + ACCOUNT_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + ACCOUNT_API.deleteList, { body: accounts });
  }
}
