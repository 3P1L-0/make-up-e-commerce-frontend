import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CART_API } from "src/app/global/configs";
import { CartDTO } from "src/app/global/model/cart/dto/CartDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class CartService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  // public getPaymentById(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.getById + id);
  // }

  // public fetchAll(): Observable<CartDTO[]> {
  //   return this._http.get<CartDTO[]>(this._url + CART_API.fetch);
  // }

  // public fetchActiveByOwnerId(ownerId: number): Observable<CartDTO[]> {
  //   return this._http.get<CartDTO[]>(this._url + CART_API.fetchActiveByOwnerId + ownerId);
  // }

  // public fetchActiveByClientId(clientId: number): Observable<CartDTO[]> {
  //   return this._http.get<CartDTO[]>(this._url + CART_API.fetchActiveByClientId + clientId);
  // }

  // public fetchByState(state): Observable<CartDTO[]> {
  //   return this._http.get<CartDTO[]>(this._url + CART_API.fetchByState + state);
  // }

  // public fetchByOwnerId(): Observable<CartDTO[]> {
  //   return this._http.get<CartDTO[]>(this._url + CART_API.fetchByOwnerId);
  // }

  // public fetchByClientId(clientId: number): Observable<CartDTO[]> {
  //   return this._http.get<CartDTO[]>(this._url + CART_API.fetchByClientId + clientId);
  // }

  // public restoreCartByCartId(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.restoreCartByCartId + id);
  // }

  // public addItemByCartId(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.addItemByCartId + id);
  // }

  // public removeItemByCartId(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.removeItemByCartId + id);
  // }
  // public addListByCartId(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.addListByCartId + id);
  // }

  // public removeItems(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.removeItems + id);
  // }

  // public updateItem(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.updateItem + id);
  // }

  // public destroyByCartId(id: number): Observable<CartDTO> {
  //   return this._http.get<CartDTO>(this._url + CART_API.destroyByCartId + id);
  // }

  // public create(cart?: CartDTO): Observable<CartDTO> {
  //   return this._http.post<CartDTO>(this._url + CART_API.create, cart);
  // }

  // public modify(paymentMethod: CartDTO): Observable<CartDTO> {
  //   return this._http.post<CartDTO>(this._url + CART_API.update, paymentMethod);
  // }

  // public checkout(paymentMethod: CartDTO): Observable<CartDTO> {
  //   return this._http.post<CartDTO>(this._url + CART_API.update, paymentMethod);
  // }

  // public delete(id?: number, payments?: CartDTO[]): Observable<void> {
  //   if (payments === undefined || payments === null) {
  //     return this._http.delete<void>(this._url + CART_API.deleteById + id);
  //   }
  //   return this._http.delete<void>(this._url + CART_API.deleteList, { body: payments });
  // }
}
