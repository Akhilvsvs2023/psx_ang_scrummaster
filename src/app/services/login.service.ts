import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) {}
  
  validateLogin(loginDetails:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login/validateLogin',loginDetails);
  }
  addUser(userDetails:IUser):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login/createUser',userDetails);
  }
}
