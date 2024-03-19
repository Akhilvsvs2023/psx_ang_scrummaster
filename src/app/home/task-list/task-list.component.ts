import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITable } from 'src/app/model/table.model';
import { ITask } from 'src/app/model/task.model';
import { IUserDetails } from 'src/app/model/userDetails.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit ,AfterViewInit{
  activeTasks : ITask[]=[];
  userDetails  : IUserDetails;
  displayedColumns: string[] = ['id','taskname','assignedBy','assignedTo','createdOn','deadline'];
  dataSource =new MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private service:TaskService){ }

  ngOnInit(): void {
    this.userDetails = JSON.parse(window.sessionStorage.getItem('userDetails'));
    this.populateActiveTeamTasks(this.userDetails.empId);
  }
  populateActiveTeamTasks(empId: string) {
    this.service.getTeamTasks(empId).subscribe(
      (response) => {
        this.activeTasks=response;
        this.dataSource = new MatTableDataSource<ITask>(this.activeTasks);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
