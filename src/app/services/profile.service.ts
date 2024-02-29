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

  getReportees(empId:string):Observable<IUserDetails[]>{
    return this.http.get<IUserDetails[]>(this.baseURL+'/getReportees?empId='+empId);
  }

  getTeamMembers(empId:string):Observable<any>{
    return this.http.get<any>(this.baseURL+'/getTeam?empId='+empId);
  }
}
