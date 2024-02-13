import { Component, OnInit } from '@angular/core';
import { IProfileRequest } from 'src/app/model/profileRequest.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  profileRequests:any[];
  currentUser:string;

  constructor(private service:RequestService){
    this.currentUser=window.sessionStorage.getItem('currentUser');
  }
  
  ngOnInit(): void {
    this.getProfileActivationRequests();
  }
  getProfileActivationRequests():void{
    this.service.getProfileActivationRequests(this.currentUser).subscribe((response)=>{
      this.profileRequests=response;
      console.log(this.profileRequests);
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}
