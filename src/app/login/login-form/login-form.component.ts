import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
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
  invalidLoginCount: number = 0;
  disableLoginForm: boolean = false;

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
      console.log(this.disableLoginForm)
      if(response.statusCode===200){
        this.formGroup.reset();
        window.sessionStorage.setItem('token',response.jwtToken);
        window.sessionStorage.setItem('user',JSON.stringify(response.user))
        this.router.navigate(['/']);
        this.toaster.callSuccessToaster('SUCCESS',response.message);
        this.invalidLoginCount=0;
        this.disableLoginForm=false;
      }
      else if(response.statusCode===430){
        this.formGroup.reset();
        this.toaster.callErrorToaster('Error',response.message);
        this.invalidLoginCount++;
      }
      else if(response.statusCode===440){
        this.toaster.callErrorToaster('ERROR',response.message);
        this.invalidLoginCount++;
      }
      else if(response.statusCode===460){
        this.toaster.callWarningToaster('ERROR',response.message);
        this.invalidLoginCount++;
      }
      else{
        this.toaster.callErrorToaster('ERROR',response.message);
      }
      if(this.invalidLoginCount>=3){
        this.disableLoginForm=true;
        this.toaster.invalidAttempts();
      }
      
    },
    (error)=>{
      console.log(error); 
      this.toaster.callErrorToaster('ERROR','Internal Server Error');
    });
  }
}
