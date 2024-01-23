import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-userform',
  templateUrl: './create-userform.component.html',
  styleUrls: ['./create-userform.component.css']
})
export class CreateUserformComponent {
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
      'gender'        : ['',Validators.required] 
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
      active:'N',
      gender:formValue.gender
    };
    this.service.addUser(a).subscribe(
      (response)=>{console.log(response)},
      (error)=>{console.log(error)}
    );
  }
}
