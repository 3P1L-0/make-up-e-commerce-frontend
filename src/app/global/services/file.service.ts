import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, from, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { FILE_API } from "../configs";
import { FileDTO } from "../model/FileDTO";

@Injectable({providedIn: 'root'})
export class AppFileService {
  /* DEPENDENCIES */
  private readonly _http = inject(HttpClient);

  /* MEMBERS */
  private readonly _url = environment.api;

  public uploadFile(multifile: File, ownerId: number, owner: string): Observable<FileDTO> {
    const formData = new FormData();
    formData.append('file', multifile);
    formData.append('owner', owner);

    return this._http.post<FileDTO>(this._url+FILE_API.upload+ownerId, formData);
  }

  public downloadFile(fileHash: string): Observable<File> {
    return this._http.get(this._url+FILE_API.download+fileHash, {responseType: "blob"}).pipe(
      map(blob => new File([blob], fileHash, {type: blob.type}))
    )
  }

  public getImgSrcString(fileHash: string): string { return this._url+FILE_API.download+fileHash; }


  public fetchImgThumbnail(): Observable<Blob> { return this._http.get("/assets/images/no_image.svg", {responseType: "blob"}); }
}
