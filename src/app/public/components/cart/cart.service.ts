import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CartDTO} from "../../../global/model/cart/dto/CartDTO";
import {environment} from "../../../../environments/environment";
import {debounceTime, Observable, tap} from "rxjs";
import {CART_API, LOCAL_STORAGE} from "../../../global/configs";
import {ItemDTO} from "../../../global/model/cart/dto/ItemDTO";
import {Purchase} from "../../../global/model/purchase/Purchase";
import {CartState} from "../../../global/model/cart/enums/CartState";

@Injectable({providedIn: 'root'})
export class AppCartService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;
  private _cart: CartDTO;

  public constructor() { this._cart = new CartDTO(); }

  public fetchActiveByOwnerId(ownerId: number): Observable<CartDTO> { return this._http.get<CartDTO>(this._url+CART_API.fetchActiveByOwnerId+ ownerId); }
  public fetchActiveByClientId(clientId: number): Observable<CartDTO> { return this._http.get<CartDTO>(this._url+CART_API.fetchActiveByClientId+ clientId); }
  public fetchByState(state: CartState): Observable<CartDTO> { return this._http.get<CartDTO>(this._url+CART_API.fetchByState+state); }
  public fetchByOwnerId(ownerId: number): Observable<CartDTO> { return this._http.get<CartDTO>(this._url+CART_API.fetchByOwnerId+ownerId); }
  public fetchByClientId(clientId: number): Observable<CartDTO> { return this._http.get<CartDTO>(this._url+CART_API.fetchByClientId+clientId); }

  public create(cart: CartDTO): Observable<CartDTO> { return this._http.post<CartDTO>(this._url+CART_API.create, cart).pipe(this._touch()); }
  public restoreCartByCartId(cartId: number): Observable<CartDTO> { return this._http.get<CartDTO>(this._url+CART_API.restoreCartByCartId+cartId).pipe(this._touch()); }
  public addItemByCartId(cartId: number, item: ItemDTO): Observable<ItemDTO> { return this._http.post<ItemDTO>(this._url+CART_API.addItemByCartId+cartId, item); }
  public removeItemByCartId(itemId: number): Observable<boolean> { return this._http.delete<boolean>(this._url+CART_API.removeItemByCartId+itemId); }
  public addListByCartId(cartId: number, list: ItemDTO[]): Observable<ItemDTO[]> { return this._http.post<ItemDTO[]>(this._url+CART_API.addListByCartId+cartId, list); }
  public removeItems(list: ItemDTO[]): Observable<boolean> { return this._http.post<boolean>(this._url+CART_API.removeItems, list); }
  public updateItem(item: ItemDTO): Observable<ItemDTO> { return this._http.post<ItemDTO>(this._url+CART_API.updateItem, item); }
  public destroyByCartId(cartId: number): Observable<boolean> { return this._http.delete<boolean>(this._url+CART_API.destroyByCartId+cartId); }
  public saveCart(): Observable<CartDTO> { return this._http.post<CartDTO>(this._url+CART_API.saveCart, this._cart); }

  public checkout(purchase: Purchase): Observable<boolean> { return this._http.post<boolean>(this._url+CART_API.checkout, purchase); }
  private _touch() { return (src$: Observable<CartDTO>) => src$.pipe(tap(c => { this.cart = c; })); };

  public totalItemsInCart(): number { return this.cart.items.length; }

  private get cart() { return this._cart; }
  private set cart(cart) { this._cart = cart; }
}
