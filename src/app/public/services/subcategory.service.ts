import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { SUBCATEGORY_API } from "src/app/global/configs";
import { SubCategoryDTO } from "src/app/global/model/cart/dto/SubCategoryDTO";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class AppSubcategoryService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public fetch(): Observable<SubCategoryDTO[]> {
    return this._http.get<SubCategoryDTO[]>(this._url+SUBCATEGORY_API.fetch);
  }

  public fetchByID(id: number): Observable<SubCategoryDTO> {
    return this._http.get<SubCategoryDTO>(this._url+SUBCATEGORY_API.getById+id);
  }

  public update(category: SubCategoryDTO): Observable<SubCategoryDTO> {
    return this._http.put<SubCategoryDTO>(this._url+SUBCATEGORY_API.update, category);
  }

  public deleteById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+SUBCATEGORY_API.deleteById+id);
  }
}
