import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDetails } from '../model/userDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseURL = 'http://localhost:8080/profile';

  constructor(private http:HttpClient) { }

  getUserDetails(username:string):Observable<IUserDetails>{
    return this.http.get<IUserDetails>(this.baseURL+'/getUserDetails?username='+username);
  }

  getReportees(username:string):Observable<IUserDetails[]>{
    return this.http.get<IUserDetails[]>(this.baseURL+'/getReportees?username='+username);
  }

}
