import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {ServiceDTO} from "../../global/model/cart/dto/ServiceDTO";
import {SERVICE_API} from "../../global/configs";
import {ServiceSpecialtyDTO} from "../../global/model/cart/dto/ServiceSpecialtyDTO";

@Injectable({providedIn: "root"})
export class AppServiceService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public fetch(): Observable<ServiceDTO[]> {
    return this._http.get<ServiceDTO[]>(this._url+SERVICE_API.fetch);
  }

  public fetchByID(id: number): Observable<ServiceDTO> {
    return this._http.get<ServiceDTO>(this._url+SERVICE_API.getById+id);
  }

  public update(service: ServiceDTO): Observable<ServiceDTO> {
    return this._http.put<ServiceDTO>(this._url+SERVICE_API.update, service);
  }

  public deleteById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+SERVICE_API.deleteById+id);
  }

  public createService(service: ServiceDTO): Observable<ServiceDTO> { return this._http.post<ServiceDTO>(this._url+SERVICE_API.create, service) }

  public createSpecialty(variant: ServiceSpecialtyDTO): Observable<ServiceSpecialtyDTO> { return this._http.post<ServiceSpecialtyDTO>(this._url+SERVICE_API.createSpecialty, variant); }

  public createSpecialtyList(variants: ServiceSpecialtyDTO[]): Observable<ServiceSpecialtyDTO[]> {
    console.log("registering specialties");
    return this._http.post<ServiceSpecialtyDTO[]>(this._url+SERVICE_API.createSpecialtyList, variants);
  }

  public updateSpecialty(variant: ServiceSpecialtyDTO): Observable<ServiceSpecialtyDTO> {
    return this._http.put<ServiceSpecialtyDTO>(this._url+SERVICE_API.updateSpecialty, variant);
  }

  public deleteSpecialtyById(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this._url+SERVICE_API.deleteSpecialtyById+id);
  }

  public deleteSpecialtyList(variants: ServiceSpecialtyDTO[]): Observable<boolean> {
    return this._http.post<boolean>(this._url+SERVICE_API.deleteSpecialtiesList, variants);
  }

  fetchSpecialties(): Observable<ServiceSpecialtyDTO[]> {
    return this._http.get<ServiceSpecialtyDTO[]>(this._url+SERVICE_API.fetchSpecialties);
  }
}
