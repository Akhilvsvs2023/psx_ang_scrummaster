import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '../model/task.model';
import { Observable } from 'rxjs';
import { ITable } from '../model/table.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseURL : string = 'http://localhost:8080/task';
  constructor(private http:HttpClient) {}

  addTask(taskDetails:ITask):Observable<any>{
    return this.http.post<any>(this.baseURL+'/createTask',taskDetails);
  }

  getAssignedByMe(empId:string):Observable<ITable>{
    return this.http.get<ITable>(this.baseURL+'/getAssignedByMe?empId='+empId);
  }

  getAssignedToMe(empId:string):Observable<ITable>{
    return this.http.get<ITable>(this.baseURL+'/getAssignedToMe?empId='+empId);
  }

  getTeamTasks(empId:string):Observable<any>{
    return this.http.get<any>(this.baseURL+'/getTeamTasks?empId='+empId);
  }


}
