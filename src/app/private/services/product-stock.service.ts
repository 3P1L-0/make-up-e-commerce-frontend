import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PRODUCT_STOCK_API } from "src/app/global/configs/routes/api/product-stock";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductStockService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public increase(product?: ProductDTO, products?: ProductDTO[]): Observable<ProductDTO> | Observable<ProductDTO[]> {
    if (product !== undefined || product !== null) {
      return this._http.post<ProductDTO>(this._url + PRODUCT_STOCK_API.increase, product);
    }
    return this._http.post<ProductDTO[]>(this._url + PRODUCT_STOCK_API.increaseList, products);
  }

  public decrease(product?: ProductDTO, products?: ProductDTO[]): Observable<ProductDTO> | Observable<ProductDTO[]> {
    if (product !== undefined || product !== null) {
      return this._http.post<ProductDTO>(this._url + PRODUCT_STOCK_API.decrease, product);
    }
    return this._http.post<ProductDTO[]>(this._url + PRODUCT_STOCK_API.decreaseList, products);
  }
}
