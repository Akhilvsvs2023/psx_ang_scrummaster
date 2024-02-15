import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfileRequest } from '../model/profileRequest.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseURL : string = 'http://localhost:8080';
  constructor(private http:HttpClient) {}
  
  getProfileActivationRequests(currentUser:string):Observable<IProfileRequest[]>{
    return this.http.get<IProfileRequest[]>(this.baseURL+'/request/getProfileRequests?currentUser='+currentUser);
  }

  approveProfile(dataMap:any):Observable<any>{
    return this.http.post<any>(this.baseURL+'/request/approveUser',dataMap);
  }
  rejectProfile(dataMap:any):Observable<any>{
    return this.http.post<any>(this.baseURL+'/request/rejectUser',dataMap);
  }
}
