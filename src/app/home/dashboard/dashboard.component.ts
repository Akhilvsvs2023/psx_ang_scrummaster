import { Component, OnInit } from '@angular/core';
import { ITable } from 'src/app/model/table.model';
import { IUserDetails } from 'src/app/model/userDetails.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  assignedByMe : ITable;
  userDetails  : IUserDetails;
  assignedToMe : ITable
  constructor(private service:TaskService){
    this.assignedByMe={
      headers:[],
      records:[]
    }
    this.assignedToMe={
      headers:[],
      records:[]
    }
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(window.sessionStorage.getItem('userDetails'));
    this.populateAssignedByMe(this.userDetails.empId);
    this.populateAssignedToMe(this.userDetails.empId);
  }

  populateAssignedToMe(empId:string):void{
    this.service.getAssignedToMe(empId).subscribe(
      (response) => {
        this.assignedToMe=response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateAssignedByMe(empId:string):void{
    this.service.getAssignedByMe(empId).subscribe(
      (response) => {
        this.assignedByMe=response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
