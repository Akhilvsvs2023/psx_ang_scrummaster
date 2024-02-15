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

  constructor(private formBuilder: FormBuilder,private service:LoginService,private toaster:ToasterService,private router:Router) {
    this.formGroup = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    }); 
   }

  ngOnInit() { }

  onSubmit(formValue:any) {
    this.service.validateLogin(formValue).subscribe((response)=>{
      if(response.statusCode===200){
        this.formGroup.reset();
        window.sessionStorage.clear();
        localStorage.clear();
        window.sessionStorage.setItem('token',response.jwtToken);
        window.sessionStorage.setItem('currentUser',response.userDetails.username);
        window.sessionStorage.setItem('userDetails',JSON.stringify(response.userDetails));
        this.router.navigate(['/']);
        this.toaster.callSuccessToaster('SUCCESS',response.message);
      }
      else if(response.statusCode===510){
        this.formGroup.reset();
        this.toaster.callErrorToaster('Error',response.message);
      }
      else if(response.statusCode===520){
        this.toaster.callErrorToaster('ERROR',response.message);
      }
      else if(response.statusCode===530){
        this.toaster.callWarningToaster('WARN',response.message);
      }
      else if(response.statusCode===540){
        this.toaster.callWarningToaster('WARN',response.message);
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
}
