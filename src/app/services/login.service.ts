import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../model/login.model';
import { IUser } from '../model/user.model';

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
    return this.http.post<any>('http://localhost:8080/login/validateLogin',loginDetails);
  }
  addUser(userDetails:IUser):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login/createUser',userDetails);
  }
}
