import {inject, Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppNavigationService} from "../../global/services/navigation.service";
import {Observable} from "rxjs";
import {UserDTO} from "../../global/model/user/dto/UserDTO";
import {USER_API} from "../../global/configs";
import {EmployeeSpecialtyDTO} from "../../global/model/user/dto/EmployeeSpecialtyDTO";

@Injectable({providedIn: 'root'})
export class AppUsersService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public fetchBlocked(): Observable<UserDTO> { return this._http.get<UserDTO>(this._url+USER_API.fetchBlocked); }
  public fetchByUserId(userId: number): Observable<UserDTO> { return this._http.get<UserDTO>(this._url+USER_API.fetchByUserId+userId); }
  public fetchByRoleId(roleId: number): Observable<UserDTO> { return this._http.get<UserDTO>(this._url+USER_API.fetchByRoleId+roleId); }
  public deleteByUserId(userId: number): Observable<boolean> { return this._http.delete<boolean>(this._url+USER_API.deleteByUserId+userId); }
  public fetchEmployees(): Observable<UserDTO[]> { return this._http.get<UserDTO[]>(this._url+USER_API.fetchEmployees); }
  public fetchSpecialties(): Observable<EmployeeSpecialtyDTO> { return this._http.get<EmployeeSpecialtyDTO>(this._url+USER_API.fetchSpecialties); }
  public createSpecialty(specialty: EmployeeSpecialtyDTO): Observable<EmployeeSpecialtyDTO> { return this._http.post<EmployeeSpecialtyDTO>(this._url+USER_API.createSpecialty, specialty); }
  public createSpecialties(specialties: EmployeeSpecialtyDTO[]): Observable<EmployeeSpecialtyDTO[]> { return this._http.post<EmployeeSpecialtyDTO[]>(this._url+USER_API.createSpecialties, specialties); }
  public updateSpecialty(specialty: EmployeeSpecialtyDTO): Observable<EmployeeSpecialtyDTO> { return this._http.put<EmployeeSpecialtyDTO>(this._http+USER_API.updateSpecialty, specialty); }
  public deleteSpecialtyById(id: number): Observable<boolean> { return this._http.delete<boolean>(this._url+USER_API.deleteSpecialtyById+id); }
  public deleteSpecialtyList(specialties: EmployeeSpecialtyDTO[]): Observable<boolean> { return this._http.post<boolean>(this._url+USER_API.deleteSpecialtyList, specialties); }
  public fetch(): Observable<UserDTO[]> { return this._http.get<UserDTO[]>(this._url+USER_API.fetch); }
  public create(user: UserDTO): Observable<UserDTO> { return this._http.post<UserDTO>(this._url+USER_API.create, user); }
  public createList(usersList: UserDTO[]): Observable<UserDTO[]> { return this._http.post<UserDTO[]>(this._url+USER_API.createList, usersList); }
  public update(usr: UserDTO): Observable<UserDTO> { return this._http.put<UserDTO>(this._url+USER_API.update, usr); }
  public blockById(id: number): Observable<UserDTO> { return this._http.get<UserDTO>(this._url+USER_API.blockById+id); }
  public fetchUsers(): Observable<UserDTO[]> { return this._http.get<UserDTO[]>(this._url+USER_API.fetchUsers); }
}
