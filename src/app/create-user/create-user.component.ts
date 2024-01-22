import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  formGroup !: FormGroup;
  post: any = '';
  hidePassword = true;

  constructor(private formBuilder : FormBuilder,private service:LoginService){
    
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'firstName'     : ['',Validators.required],
      'lastName'      : ['',Validators.required],
      'departmentName': ['',Validators.required],
      'role'          : ['',Validators.required],
      'reportingTo'   : ['',[Validators.required,Validators.pattern('^ptpl-\\d+$')]],
      'emailId'       : ['',[Validators.required,Validators.email]],
      'empId'         : ['',[Validators.required,Validators.pattern('^ptpl-\\d+$')]],
      'userId'        : ['',Validators.required],
      'password'      : ['',Validators.required],      
    });
  }

  onSubmit(formValue:any){
    console.log(formValue);
    var a:IUser={
      userId:formValue.userId,
      password:formValue.password,
      empId:formValue.empId,
      firstName:formValue.firstName,
      lastName:formValue.lastName,
      departmentName:formValue.departmentName,
      role:formValue.role,
      emailId:formValue.emailId,
      reportingTo:formValue.reportingTo,
      createdOn:new Date(),
      active:'N'
    };
    this.service.addUser(a).subscribe(
      response=>{console.log(response)},
      error=>{console.log(error)}
    );
  }
}
