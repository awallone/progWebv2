import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Utilisateur } from "./utilisateur";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchUtilisateurListFromRemote():Observable<any> {
    return this._http.get<any>("http://localhost:8088/getuserList");
  }

  addUtilisateurToRemote(utilisateur : Utilisateur):Observable<any> {
   return this._http.post<any>("http://localhost:8088/adduser",utilisateur);
  }

  fetchUtilisateurByidFromRemote(id : number):Observable<any> {
    return this._http.get<any>("http://localhost:8088/getuserbyid/"+id);
  }

  deleteUtilisateurByidFromRemote(id : number):Observable<any> {
    return this._http.delete<any>("http://localhost:8088/deleteuserbyid/"+id);
  }


}
