import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateUser } from '../model/createUser.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL : string = 'http://localhost:8080/login';

  constructor(private http:HttpClient) {}
  
  validateLogin(loginDetails:any):Observable<any>{
    return this.http.post<any>(this.baseURL+'/validateLogin',loginDetails);
  }
  addUser(userDetails:ICreateUser):Observable<any>{
    return this.http.post<any>(this.baseURL+'/createUser',userDetails);
  }
}
