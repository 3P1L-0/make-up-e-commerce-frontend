import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BRAND_API } from "src/app/global/configs/routes/api/brand";
import { BrandDTO } from "src/app/global/model/cart/dto/BrandDTO";
import { environment } from "src/environments/environment";

@Injectable({providedIn: "root"})
export class AppBrandService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;

  public fetch(): Observable<BrandDTO[]> {
    return this._http.get<BrandDTO[]>(this._url+BRAND_API.fetch);
  }

  public fetchByID(id: number): Observable<BrandDTO> {
    return this._http.get<BrandDTO>(this._url+BRAND_API.getById+id);
  }

  public update(brand: BrandDTO): Observable<BrandDTO> {
    return this._http.put<BrandDTO>(this._url+BRAND_API.update, brand);
  }

  public deleteById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+BRAND_API.deleteById+id);
  }

  public createList(newBrands: BrandDTO[]): Observable<BrandDTO[]> {
    return this._http.post<BrandDTO[]>(this._url+BRAND_API.createList, newBrands);
  }

  public create(brand: BrandDTO): Observable<BrandDTO> {
    return this._http.post<BrandDTO>(this._url+BRAND_API.create, brand);
  }
}
