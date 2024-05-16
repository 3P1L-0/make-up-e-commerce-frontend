import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ROLES_API } from "src/app/global/configs";
import { RoleDTO } from "src/app/global/model/user/dto/RoleDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class RoleService {

  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public getById(id: number): Observable<RoleDTO> {
    return this._http.get<RoleDTO>(this._url + ROLES_API.getById + id);
  }

  public fetchAll(): Observable<RoleDTO[]> {
    return this._http.get<RoleDTO[]>(this._url + ROLES_API.fetchAll);
  }

  public fetchSpecialist(): Observable<RoleDTO[]> {
    return this._http.get<RoleDTO[]>(this._url + ROLES_API.fetchSpecialist);

  }

  public fetchOperator(): Observable<RoleDTO[]> {
    return this._http.get<RoleDTO[]>(this._url + ROLES_API.fetchOperator);
  }

  public fetchClient(): Observable<RoleDTO[]> {
    return this._http.get<RoleDTO[]>(this._url + ROLES_API.fetchClient);
  }

  public fetchAdministrator(): Observable<RoleDTO[]> {
    return this._http.get<RoleDTO[]>(this._url + ROLES_API.fetchAdministrator);
  }

  public save(role?: RoleDTO, roles?: RoleDTO[]): Observable<RoleDTO> | Observable<RoleDTO[]> {
    if (role !== undefined || role !== null) {
      return this._http.post<RoleDTO>(this._url + ROLES_API.create, role);
    }
    return this._http.post<RoleDTO[]>(this._url + ROLES_API.createList, roles);
  }

  public modify(roleMethod: RoleDTO): Observable<RoleDTO> {
    return this._http.post<RoleDTO>(this._url + ROLES_API.update, roleMethod);
  }

  public customizeRole(roleMethod: RoleDTO): Observable<RoleDTO> {
    return this._http.post<RoleDTO>(this._url + ROLES_API.update, roleMethod);
  }

  public delete(id?: number, roles?: RoleDTO[]): Observable<void> {
    if (roles === undefined || roles === null) {
      return this._http.delete<void>(this._url + ROLES_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + ROLES_API.deleteList, { body: roles });
  }
}
