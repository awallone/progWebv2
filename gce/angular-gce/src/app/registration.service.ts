import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

public loginUserFromRemote(utilisateur :Utilisateur):Observable<any> {
return this._http.post<any>("http://localhost:8088/login",utilisateur)

}


}
