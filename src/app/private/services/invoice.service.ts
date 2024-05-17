import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { INVOICE_API } from "src/app/global/configs";
import { InvoiceDTO } from "src/app/global/model/documents/dto/InvoiceDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public getById(id: number): Observable<InvoiceDTO> {
    return this._http.get<InvoiceDTO>(this._url + INVOICE_API.getById + id);
  }

  public fetchByOwnerId(ownerId: number): Observable<InvoiceDTO> {
    return this._http.get<InvoiceDTO>(this._url + INVOICE_API.fetchByOwnerId + ownerId);
  }

  public fetchByClientId(clientId: number): Observable<InvoiceDTO> {
    return this._http.get<InvoiceDTO>(this._url + INVOICE_API.fetchByClientId + clientId);
  }

  public getByNumber(number: number): Observable<InvoiceDTO> {
    return this._http.get<InvoiceDTO>(this._url + INVOICE_API.getByNumber + number);
  }

  public getByAppointmentId(appointmentId: number): Observable<InvoiceDTO> {
    return this._http.get<InvoiceDTO>(this._url + INVOICE_API.getByAppointmentId + appointmentId);
  }

  public save(invoice?: InvoiceDTO, invoices?: InvoiceDTO[]): Observable<InvoiceDTO> | Observable<InvoiceDTO[]> {
    if (invoice !== undefined || invoice !== null) {
      return this._http.post<InvoiceDTO>(this._url + INVOICE_API.create, invoice);
    }
    return this._http.post<InvoiceDTO[]>(this._url + INVOICE_API.createList, invoices);
  }

  public modify(invoiceMethod: InvoiceDTO): Observable<InvoiceDTO> {
    return this._http.post<InvoiceDTO>(this._url + INVOICE_API.update, invoiceMethod);
  }

  public delete(id?: number, invoices?: InvoiceDTO[]): Observable<void> {
    if (invoices === undefined || invoices === null) {
      return this._http.delete<void>(this._url + INVOICE_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + INVOICE_API.deleteList, { body: invoices });
  }
}
