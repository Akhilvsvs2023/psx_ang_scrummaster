import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ILogin } from 'src/app/model/login.model';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formGroup : FormGroup;
  post: any = '';
  dynamictype: string = "number";
  hidePassword = true;

  constructor(private formBuilder: FormBuilder,private service:LoginService,private toaster:ToasterService,private router:Router) {
    this.formGroup = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    }); 
   }

  ngOnInit() { }

  onSubmit(formValue:any) {
    console.log(formValue);
    this.service.validateLogin(formValue).subscribe((response)=>{
      console.log(response);
      if(response.statusCode===200){
        this.formGroup.reset();
        localStorage.setItem('token',response.jwtToken);
        this.router.navigate(['/']);
        this.toaster.callSuccessToaster('SUCCESS','Logged successfully');
      }
      else if(response.statusCode===430){
        this.formGroup.reset();
        this.toaster.callErrorToaster('Error','Incorrect Password');
      }
      else if(response.statusCode===440){
        this.toaster.callErrorToaster('ERROR','Invalid Credentials');
      }
      else{
        this.toaster.callErrorToaster('ERROR','Internal Server Error');
      }
    },
    (error)=>{
      console.log(error); 
      this.toaster.callErrorToaster('ERROR','Internal Server Error');
    });
  }
}
