import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BILLING_ADDRESS_API } from "src/app/global/configs/routes/api/billing-address";
import { BillingAddressDTO } from "src/app/global/model/config/BillingAddressDTO";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class BillingAddressService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;

  public getById(id: number): Observable<BillingAddressDTO> {
    return this._http.get<BillingAddressDTO>(this._url + BILLING_ADDRESS_API.getById + id);
  }

  public fetchAll(): Observable<BillingAddressDTO[]> {
    return this._http.get<BillingAddressDTO[]>(this._url + BILLING_ADDRESS_API.fetchAll);
  }

  public fetchByUserId(id: number): Observable<BillingAddressDTO> {
    return this._http.get<BillingAddressDTO>(this._url + BILLING_ADDRESS_API.fetchByUserId + id);
  }

  public save(billing?: BillingAddressDTO, billings?: BillingAddressDTO[]): Observable<BillingAddressDTO> | Observable<BillingAddressDTO[]> {
    if (billing !== undefined || billing !== null) {
      return this._http.post<BillingAddressDTO>(this._url + BILLING_ADDRESS_API.create, billing);
    }
    return this._http.post<BillingAddressDTO[]>(this._url + BILLING_ADDRESS_API.createList, billings);
  }

  public modify(payment: BillingAddressDTO): Observable<BillingAddressDTO> {
    return this._http.post<BillingAddressDTO>(this._url + BILLING_ADDRESS_API.update, payment);
  }

  public delete(id?: number, payments?: BillingAddressDTO[]): Observable<void> {
    if (payments === undefined || payments === null) {
      return this._http.delete<void>(this._url + BILLING_ADDRESS_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + BILLING_ADDRESS_API.deleteList, { body: payments });
  }
}
