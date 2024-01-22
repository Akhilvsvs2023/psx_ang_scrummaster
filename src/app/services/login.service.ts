import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn:boolean;
  private url:string;
  constructor(private http:HttpClient) {
    this.loggedIn=false;
    this.url='';
   }
  isLoggedIn():boolean{
    return this.loggedIn;
  }
  setLoggedIn(value:boolean){
    this.loggedIn=value;
  }
  validateLogin(loginDetails:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login',loginDetails);
  }
  addUser(userDetails:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/addUser',userDetails);
  }
}
