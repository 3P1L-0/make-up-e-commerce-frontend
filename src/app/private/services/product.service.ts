import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import {map, Observable} from "rxjs";
import { PRODUCT_API } from "src/app/global/configs";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";
import { environment } from "src/environments/environment";
import {Product} from "../../global/model/cart/Product";
import {ProductVariant} from "../../global/model/cart/ProductVariant";

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

  public createVariantList(variants: ProductVariantDTO[]): Observable<ProductVariantDTO[]> {
    return this._http.post<ProductVariantDTO[]>(this._url+PRODUCT_API.createVariantList, variants.map(v=> {v.product.variants = []}));
  }

  public newVariant(variant: ProductVariantDTO) { return this._http.post<ProductVariantDTO>(this._url+PRODUCT_API.newVariant, variant); }
  public updateVariant(variant: ProductVariantDTO) { return this._http.put<ProductVariantDTO>(this._url+PRODUCT_API.updateVariant, variant); }
  public fetchVariantById(id: number) { return this._http.get<ProductVariantDTO>(this._url+PRODUCT_API.fetchVariantById+id); }
  public deleteVariantById(id: number) { return this._http.delete<boolean>(this._url+PRODUCT_API.deleteVariantById+id); }
  public deleteVariantsList(variants: ProductVariantDTO[]) { return this._http.post<boolean>(this._url+PRODUCT_API.deleteVariantsList, variants); }
  public fetchVariants() { return this._http.get<ProductVariantDTO[]>(this._url+PRODUCT_API.fetchVariants); }
  public fetchVariantsByProductId(productId: number) { return this._http.get<ProductVariantDTO[]>(this._url+PRODUCT_API.fetchVariantsByProductId+productId); }

  private toEntityList(src$: Observable<ProductDTO[]>): Observable<Product[]> { return src$.pipe(map(d => d.map(e => new Product(e)))); }
  private toEntity(src$: Observable<ProductDTO>): Observable<Product> { return src$.pipe(map(d => new Product(d))); }

  private toEntityListV(src$: Observable<ProductVariantDTO[]>) { return src$.pipe(map(d => d.map(e => new ProductVariant(e)))); }
  private toEntityV(src$: Observable<ProductVariantDTO>){ return src$.pipe(map(d => new ProductVariant(d))); }
}
