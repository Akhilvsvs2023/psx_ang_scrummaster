import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITable } from 'src/app/model/table.model';
import { ITask } from 'src/app/model/task.model';
import { IUserDetails } from 'src/app/model/userDetails.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  assignedByMeTable : ITable;
  userDetails  : IUserDetails;
  assignedToMeTable : ITable;
  assignedToMeDataSource = new MatTableDataSource;
  assignedByMeDataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) assignedToMePaginator: MatPaginator;
  @ViewChild(MatPaginator) assignedByMePaginator: MatPaginator;
  
  ngAfterViewInit() {
    this.assignedToMeDataSource.paginator = this.assignedToMePaginator;
    this.assignedByMeDataSource.paginator = this.assignedByMePaginator;
  }

  constructor(private service:TaskService){
    this.assignedByMeTable={
      headers:[],
      records:[]
    }
    this.assignedToMeTable={
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
        this.assignedToMeTable=response;
        this.assignedToMeDataSource = new MatTableDataSource<string[]>(this.assignedToMeTable.records);
        this.assignedToMeDataSource.paginator=this.assignedToMePaginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateAssignedByMe(empId:string):void{
    this.service.getAssignedByMe(empId).subscribe(
      (response) => {
        this.assignedByMeTable=response;
        this.assignedByMeDataSource = new MatTableDataSource<string[]>(this.assignedByMeTable.records);
        this.assignedByMeDataSource.paginator=this.assignedByMePaginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}