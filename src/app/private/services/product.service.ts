import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PRODUCT_API } from "src/app/global/configs";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";
import { environment } from "src/environments/environment";

@Injectable({providedIn: "root"})
export class AppProductService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public fetch(): Observable<ProductDTO[]> { return this._http.get<ProductDTO[]>(this._url+PRODUCT_API.fetch); }

  public fetchByID(id: number): Observable<ProductDTO> {
    return this._http.get<ProductDTO>(this._url+PRODUCT_API.getById+id);
  }

  public update(category: ProductDTO): Observable<ProductDTO> { return this._http.put<ProductDTO>(this._url+PRODUCT_API.update, category); }

  public deleteById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+PRODUCT_API.deleteById+id);
  }

  public newProduct(product: ProductDTO): Observable<ProductDTO> { return this._http.post<ProductDTO>(this._url+PRODUCT_API.create, product) }

  public newVariant(variant: ProductVariantDTO): Observable<ProductVariantDTO> { return this._http.post<ProductVariantDTO>(this._url+PRODUCT_API.newVariant, variant); }

  public createVariantList(variants: ProductVariantDTO[]): Observable<ProductVariantDTO[]> {
    variants.forEach(v=> {v.product.variants = []});
    return this._http.post<ProductVariantDTO[]>(this._url+PRODUCT_API.createVariantList, variants);
  }

  public updateVariant(variant: ProductVariantDTO): Observable<ProductVariantDTO> {
    return this._http.put<ProductVariantDTO>(this._url+PRODUCT_API.updateVariant, variant);
  }

  public deleteVariantById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+PRODUCT_API.deleteVariantById+id);
  }

  public deleteVariantsList(variants: ProductVariantDTO[]): Observable<boolean> {
    return this._http.post<boolean>(this._url+PRODUCT_API.deleteVariantsList, variants);
  }

  fetchVariants(): Observable<ProductVariantDTO[]> {
    return this._http.get<ProductVariantDTO[]>(this._url+PRODUCT_API.fetchVariants);
  }
}
