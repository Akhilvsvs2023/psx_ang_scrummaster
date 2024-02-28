import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '../model/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseURL : string = 'http://localhost:8080/task';
  constructor(private http:HttpClient) {}

  addTask(taskDetails:ITask):Observable<any>{
    return this.http.post<any>(this.baseURL+'/createTask',taskDetails);
  }
}
