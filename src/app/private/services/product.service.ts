import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {PRODUCT_API} from "src/app/global/configs";
import {ProductDTO} from "src/app/global/model/cart/dto/ProductDTO";
import {environment} from "src/environments/environment";
import {Product} from "../../global/model/cart/Product";

@Injectable({providedIn: "root"})
export class AppProductService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public fetch(): Observable<Product[]> { return this.toEntityList(this._http.get<ProductDTO[]>(this._url+PRODUCT_API.fetch)); }
  public fetchByID(id: number): Observable<Product> { return this.toEntity(this._http.get<ProductDTO>(this._url+PRODUCT_API.getById+id)); }
  public update(category: ProductDTO): Observable<Product> { return this.toEntity(this._http.put<ProductDTO>(this._url+PRODUCT_API.update, category)); }
  public deleteById(id: number): Observable<boolean> { return this._http.delete<boolean>(this._url+PRODUCT_API.deleteById+id); }
  public newProduct(product: ProductDTO): Observable<Product> { return this.toEntity(this._http.post<ProductDTO>(this._url+PRODUCT_API.create, product)) }

  private toEntityList(src$: Observable<ProductDTO[]>): Observable<Product[]> { return src$.pipe(map(d => d.map(e => new Product(e)))); }
  private toEntity(src$: Observable<ProductDTO>): Observable<Product> { return src$.pipe(map(d => new Product(d))); }
}
