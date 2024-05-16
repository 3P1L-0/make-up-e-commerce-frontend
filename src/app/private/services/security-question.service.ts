import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { SECURITY_QUESTION_API } from "src/app/global/configs";
import { SecurityQuestionDTO } from "src/app/global/model/user/dto/SecurityQuestionDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class SecurityQuestionService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.api;


  public getById(id: number): Observable<SecurityQuestionDTO> {
    return this._http.get<SecurityQuestionDTO>(this._url + SECURITY_QUESTION_API.getById + id);
  }

  public fetch(): Observable<SecurityQuestionDTO[]> {
    return this._http.get<SecurityQuestionDTO[]>(this._url + SECURITY_QUESTION_API.fetchAll);
  }

  public fetchByUserId(userId: number): Observable<SecurityQuestionDTO[]> {
    return this._http.get<SecurityQuestionDTO[]>(this._url + SECURITY_QUESTION_API.fetchByUserId + userId);
  }

  public create(accountId: number): Observable<SecurityQuestionDTO[]> {
    return this._http.get<SecurityQuestionDTO[]>(this._url + SECURITY_QUESTION_API.fetchByAccountId + accountId);
  }

  public save(SecurityQuestion?: SecurityQuestionDTO, SecurityQuestions?: SecurityQuestionDTO[]): Observable<SecurityQuestionDTO> | Observable<SecurityQuestionDTO[]> {
    if (SecurityQuestion !== undefined || SecurityQuestion !== null) {
      return this._http.post<SecurityQuestionDTO>(this._url + SECURITY_QUESTION_API.create, SecurityQuestion);
    }
    return this._http.post<SecurityQuestionDTO[]>(this._url + SECURITY_QUESTION_API.createList, SecurityQuestions);
  }

  public modify(SecurityQuestion: SecurityQuestionDTO): Observable<SecurityQuestionDTO> {
    return this._http.post<SecurityQuestionDTO>(this._url + SECURITY_QUESTION_API.update, SecurityQuestion);
  }

  public delete(id?: number, SecurityQuestions?: SecurityQuestionDTO[]): Observable<void> {
    if (SecurityQuestions === undefined || SecurityQuestions === null) {
      return this._http.delete<void>(this._url + SECURITY_QUESTION_API.deleteById + id);
    }
    return this._http.delete<void>(this._url + SECURITY_QUESTION_API.deleteList, { body: SecurityQuestions });
  }

  public deleteByAccountId(accountId?: number): Observable<void> {
    return this._http.delete<void>(this._url + SECURITY_QUESTION_API.deleteByAccountId + accountId);
  }

}
