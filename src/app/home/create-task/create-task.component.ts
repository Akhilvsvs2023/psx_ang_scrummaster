import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITask } from 'src/app/model/task.model';
import { IUserDetails } from 'src/app/model/userDetails.model';
import { ProfileService } from 'src/app/services/profile.service';
import { TaskService } from 'src/app/services/task.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskFormGroup !: FormGroup;
  userDetails !: IUserDetails
  reportees : IUserDetails[] = []

  constructor(private formBuilder : FormBuilder,private router:Router,private toaster:ToasterService,private profileService:ProfileService,private taskService:TaskService){
    this.userDetails={
      firstName:null,
      lastName:null,
      emailId:null,
      empId:null,
      username:null,
      departmentName:null,
      designation:null,
      reportingTo:null,
      gender:null
    };
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(window.sessionStorage.getItem('userDetails'));
    this.getReportees();
    this.taskFormGroup = this.formBuilder.group({
      'taskName'     : ['',Validators.required],
      'projectName'  : ['',Validators.required],
      'description'  : [''],
      'assignedBy'   : [this.userDetails.empId],
      'assignedTo'   : ['',Validators.required],
      'priority'     : ['',Validators.required],
      'deadline'     : ['',Validators.required],
    });
  }
  
  getReportees():void{
    this.profileService.getReportees(JSON.parse(window.sessionStorage.getItem('userDetails')).empId).subscribe((response)=>{
      this.reportees=response;
    },
    (error)=>{
      console.log(error);
    });
  }

  onSubmit(formData:any){
    const date : Date = new Date();
    const submitData : ITask =
    {
      taskId : 'task_'+date.getTime(),
      taskName : formData.taskName,
      projectName : formData.projectName,
      description : formData.description,
      assignedBy  : formData.assignedBy,
      assignedTo  : formData.assignedTo,
      priority    : formData.priority,
      createdOn   : date,
      deadline    : formData.deadline,
      active      : 1
    }
    console.log(submitData);
    this.taskService.addTask(submitData).subscribe(
      (response)=>{
        if(response.statusCode===200){
          this.taskFormGroup.reset();
          this.toaster.callSuccessToaster(response.status,response.message);
        }else if(response.statusCode===310){
          this.toaster.callWarningToaster(response.status,response.message);
        }else if(response.statusCode===320){
          this.toaster.callWarningToaster(response.status,response.message);
        }else{
          this.toaster.callErrorToaster('ERROR',response.message);
        }
      },
      (error) =>{
        this.toaster.callErrorToaster('Error','Internal Server Error')
        console.log(error);
      }
    );
    this.ngOnInit();
  }
}
