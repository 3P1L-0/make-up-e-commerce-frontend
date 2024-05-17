import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PAYMENT_CARD_API } from "src/app/global/configs/routes/api/payment-card";
import { PaymentCardDTO } from "src/app/global/model/documents/dto/PaymentCardDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PaymentCardService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public getPaymentById(id: number): Observable<PaymentCardDTO> {
    return this._http.get<PaymentCardDTO>(this._url + PAYMENT_CARD_API.getById + id);
  }

  public fetchAll(): Observable<PaymentCardDTO[]> {
    return this._http.get<PaymentCardDTO[]>(this._url + PAYMENT_CARD_API.fetchAll);
  }

  public fetchByUserId(id: number): Observable<PaymentCardDTO> {
    return this._http.get<PaymentCardDTO>(this._url + PAYMENT_CARD_API.fetchByUserId + id);
  }

  public fetchByCardNumber(number: number): Observable<PaymentCardDTO> {
    return this._http.get<PaymentCardDTO>(this._url + PAYMENT_CARD_API.fetchByCardNumber + number);
  }

  public save(payment?: PaymentCardDTO, payments?: PaymentCardDTO[]): Observable<PaymentCardDTO> | Observable<PaymentCardDTO[]> {
    if (payment !== undefined || payment !== null) {
      return this._http.post<PaymentCardDTO>(this._url + PAYMENT_CARD_API.create, payment);
    }
    return this._http.post<PaymentCardDTO[]>(this._url + PAYMENT_CARD_API.createList, payments);
  }

  public modify(payment: PaymentCardDTO): Observable<PaymentCardDTO> {
    return this._http.post<PaymentCardDTO>(this._url + PAYMENT_CARD_API.update, payment);
  }

  public delete(id?: number, payments?: PaymentCardDTO[]): Observable<void> {
    if (payments === undefined || payments === null) {
      return this._http.delete<void>(this._url + PAYMENT_CARD_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + PAYMENT_CARD_API.deleteList, { body: payments });
  }
}
