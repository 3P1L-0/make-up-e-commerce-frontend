import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ORDER_API } from "src/app/global/configs/routes/api/order";
import { OrderDTO } from "src/app/global/model/documents/dto/OrderDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public getById(id: number): Observable<OrderDTO> {
    return this._http.get<OrderDTO>(this._url + ORDER_API.getById + id);
  }

  public fetchAll(): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this._url + ORDER_API.fetchAll);
  }

  public fetchSpecialist(): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this._url + ORDER_API.fetchByState);

  }

  public completeOrder(order?: OrderDTO): Observable<OrderDTO> {
    return this._http.put<OrderDTO>(this._url + ORDER_API.completeOrder, order);
  }

  public shipeOrder(order?: OrderDTO): Observable<OrderDTO> {
    return this._http.put<OrderDTO>(this._url + ORDER_API.shipeOrder, order);
  }

  public cancelOrder(order?: OrderDTO): Observable<OrderDTO> {
    return this._http.put<OrderDTO>(this._url + ORDER_API.cancelOrder, order);
  }
}
