import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ILogin } from 'src/app/model/login.model';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder,private service:LoginService) {
    this.formGroup = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    }); 
   }

  ngOnInit() { }

  onSubmit(formValue:any) {
    console.log(formValue);
    this.service.validateLogin(formValue).subscribe((res)=>{
      console.log(res);
    });
  }
}
