import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseURL : string = 'http://localhost:8080';
    
  constructor(private http:HttpClient) {}
  
  getProfileActivationRequests(currentUser:string):Observable<any>{
    return this.http.post<any>(this.baseURL+'/request/getProfileRequests',currentUser);
  }
}
