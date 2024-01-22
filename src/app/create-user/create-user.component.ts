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
      'firstName'   : ['',Validators.required],
      'lastName'    : ['',Validators.required],
      'designation' : ['',Validators.required],
      'reporting'   : ['',[Validators.required,Validators.pattern('^ptpl-\\d+$')]],
      'emailID'     : ['',[Validators.required,Validators.email]],
      'empid'       : ['',[Validators.required,Validators.pattern('^ptpl-\\d+$')]],
      'username'    : ['',Validators.required],
      'password'    : ['',Validators.required],      
    });
  }

  onSubmit(formValue:any){
    console.log(formValue);
    var a:IUser={
      firstName:formValue.firstName,
      lastName:formValue.lastName,
      empid:formValue.empid,
      reporting:formValue.reporting,
      designation:formValue.designation,
      email:formValue.emailID,
      username:formValue.username,
      password:formValue.password,
      createdOn:new Date()
    };
    this.service.addUser(a).subscribe(
      response=>{console.log(response,"Added user successfully")},
      error=>{console.log(error)}
    );
  }
}
