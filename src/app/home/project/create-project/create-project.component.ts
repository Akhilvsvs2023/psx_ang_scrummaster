import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICreateProject } from 'src/app/model/createProject.model';
import { IUserDetails } from 'src/app/model/userDetails.model';
import { ProfileService } from 'src/app/services/profile.service';
import { ProjectService } from 'src/app/services/project.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit{
  formGroup : FormGroup;
  reportees : IUserDetails[] = [];
  user:string;
  project:ICreateProject;
  constructor(private formBuilder: FormBuilder,private toaster:ToasterService,private router:Router,private projectService:ProjectService,private profileService:ProfileService,private dialogRef: MatDialogRef<CreateProjectComponent>) { 
    this.project = {
      projectName : null,
      description : null,
      createdBy   : null,
      projectMembers : null
    }
  }
  
  ngOnInit(): void {
    this.user=JSON.parse(window.sessionStorage.getItem('userDetails')).empId;
    this.getReportees();
    this.formGroup = this.formBuilder.group({
      'projectName'    : [null, Validators.required],
      'description'    : [null, Validators.required],
      selectedProjectMembers   : this.formBuilder.array([])
    });
  }

  handleProjectMembers(event : any):void{
    let selectedMembersArr = this.formGroup.get('selectedProjectMembers') as FormArray
    if(event.target.checked){
      selectedMembersArr.push(new FormControl(event.target.value))
    }else{
      let i=0;
      selectedMembersArr.controls.forEach((member:any)=>{
        if(member.value==event.target.value){
          selectedMembersArr.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  getReportees():void{
    this.profileService.getReportees(JSON.parse(window.sessionStorage.getItem('userDetails')).empId).subscribe((response)=>{
      this.reportees=response;
    },
    (error)=>{
      console.log(error);
    });
  }
   onSubmit(formValue:any) {
    this.project.projectName=formValue.projectName;
    this.project.description=formValue.description;
    this.project.createdBy=this.user;
    this.project.projectMembers=formValue.selectedProjectMembers;
    
    this.projectService.createProject(this.project).subscribe((response)=>{
      if(response.statusCode===200){
        this.formGroup.reset();
        this.closeDialog();
        this.toaster.callSuccessToaster('SUCCESS',response.message);
      }
      else{
        this.toaster.callErrorToaster('ERROR',response.message);
      }      
    },
    (error)=>{
      console.log(error); 
      this.toaster.callErrorToaster('ERROR','Internal Server Error');
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
