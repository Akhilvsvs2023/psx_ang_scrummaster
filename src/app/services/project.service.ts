import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateProject } from '../model/createProject.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseURL : string = 'http://localhost:8080/project';

  constructor(private http:HttpClient) {}
  
  createProject(projectDetails:ICreateProject):Observable<any>{
    return this.http.post<any>(this.baseURL+'/createProject',projectDetails);
  }

  getMyProjects(empId:string):Observable<any>{
    return this.http.post<any>(this.baseURL+'/getMyProject',empId);
  }
}
