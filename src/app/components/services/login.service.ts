import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  
  private _URL:string = "http://localhost:5000/"

  loginUser(userLoginObj:any):Observable<any> {   //Requesting user login.
    return this.http.post(this._URL+"login",userLoginObj)
  }

}
