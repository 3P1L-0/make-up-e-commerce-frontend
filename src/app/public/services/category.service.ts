import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CATEGORY_API } from "src/app/global/configs";
import { CategoryDTO } from "src/app/global/model/cart/dto/CategoryDTO";
import { environment } from "src/environments/environment";

@Injectable({providedIn: "root"})
export class AppCategoryService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;

  public fetch(): Observable<CategoryDTO[]> {
    return this._http.get<CategoryDTO[]>(this._url+CATEGORY_API.fetch);
  }

  public fetchByID(id: number): Observable<CategoryDTO> {
    return this._http.get<CategoryDTO>(this._url+CATEGORY_API.getById+id);
  }

  public update(category: CategoryDTO): Observable<CategoryDTO> {
    return this._http.put<CategoryDTO>(this._url+CATEGORY_API.update, category);
  }

  public deleteById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+CATEGORY_API.deleteById+id);
  }
}
