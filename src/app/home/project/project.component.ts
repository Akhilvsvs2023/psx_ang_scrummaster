import { Component, OnInit } from '@angular/core';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from 'src/app/model/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  level : number;
  user  : string
  showAddProject : boolean;
  myProjects : IProject[];

  constructor(private dialog:MatDialog,private service:ProjectService){}
  
  ngOnInit(): void {
    this.user=JSON.parse(window.sessionStorage.getItem('userDetails')).empId;
    this.level=parseInt(window.sessionStorage.getItem('level'));
    this.showAddProject=(this.level===3)?true:false;
    this.getMyProjects(this.user);
  }

  getMyProjects(empId:string){
    this.service.getMyProjects(empId).subscribe((response)=>{
      this.myProjects=response;
    },
    (error)=>{
      console.log(error);
    });
  }

  openDialog(): void {
    this.dialog.open(CreateProjectComponent, {
      width: '50%',
      data: {
        title: 'New Project',
        message: 'This is to create a new Project.'
      }
    });
  }
}
