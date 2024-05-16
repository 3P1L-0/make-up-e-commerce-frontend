import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PAYMENT_METHOD_API } from "src/app/global/configs";
import { PaymentMethodDTO } from "src/app/global/model/documents/dto/PaymentMethodDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class CardService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public getPaymentMethodById(id: number): Observable<PaymentMethodDTO> {
    return this._http.get<PaymentMethodDTO>(this._url + PAYMENT_METHOD_API.getById + id);
  }

  public fetchAll(): Observable<PaymentMethodDTO[]> {
    return this._http.get<PaymentMethodDTO[]>(this._url + PAYMENT_METHOD_API.fetch);
  }

  public save(paymentMethod?: PaymentMethodDTO, paymentMethods?: PaymentMethodDTO[]): Observable<PaymentMethodDTO> | Observable<PaymentMethodDTO[]> {
    if (paymentMethod !== undefined || paymentMethod !== null) {
      return this._http.post<PaymentMethodDTO>(this._url + PAYMENT_METHOD_API.create, paymentMethod);
    }
    return this._http.post<PaymentMethodDTO[]>(this._url + PAYMENT_METHOD_API.createList, paymentMethods);
  }

  public modify(paymentMethod: PaymentMethodDTO): Observable<PaymentMethodDTO> {
    return this._http.post<PaymentMethodDTO>(this._url + PAYMENT_METHOD_API.update, paymentMethod);
  }

  public delete(id?: number, paymentMethods?: PaymentMethodDTO[]): Observable<void> {
    if (paymentMethods === undefined || paymentMethods === null) {
      return this._http.delete<void>(this._url + PAYMENT_METHOD_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + PAYMENT_METHOD_API.deleteList, { body: paymentMethods });
  }
}
