import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PAYMENT_API } from "src/app/global/configs";
import { PaymentDTO } from "src/app/global/model/documents/dto/PaymentDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class CardService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public getPaymentById(id: number): Observable<PaymentDTO> {
    return this._http.get<PaymentDTO>(this._url + PAYMENT_API.getById + id);
  }

  public fetchAll(): Observable<PaymentDTO[]> {
    return this._http.get<PaymentDTO[]>(this._url + PAYMENT_API.fetch);
  }

  public fetchPaymentByFacturaId(id: number): Observable<PaymentDTO> {
    return this._http.get<PaymentDTO>(this._url + PAYMENT_API.fetchByFacturaId + id);
  }

  public fetchPaymentByOperadorId(id: number): Observable<PaymentDTO> {
    return this._http.get<PaymentDTO>(this._url + PAYMENT_API.fetchByOperatorId + id);
  }

  public save(payment?: PaymentDTO, payments?: PaymentDTO[]): Observable<PaymentDTO> | Observable<PaymentDTO[]> {
    if (payment !== undefined || payment !== null) {
      return this._http.post<PaymentDTO>(this._url + PAYMENT_API.create, payment);
    }
    return this._http.post<PaymentDTO[]>(this._url + PAYMENT_API.createList, payments);
  }

  public modify(paymentMethod: PaymentDTO): Observable<PaymentDTO> {
    return this._http.post<PaymentDTO>(this._url + PAYMENT_API.update, paymentMethod);
  }

  public delete(id?: number, payments?: PaymentDTO[]): Observable<void> {
    if (payments === undefined || payments === null) {
      return this._http.delete<void>(this._url + PAYMENT_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + PAYMENT_API.deleteList, { body: payments });
  }
}
