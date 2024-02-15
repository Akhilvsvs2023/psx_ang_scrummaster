import { Component, OnInit } from '@angular/core';
import { IProfileRequest } from 'src/app/model/profileRequest.model';
import { RequestService } from 'src/app/services/request.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  profileRequests: IProfileRequest[];
  profileRequest: IProfileRequest;
  currentUser: string;
  approveReason:string;
  rejectionReason:string;

  constructor(private service: RequestService, private toaster: ToasterService) {
    this.currentUser = window.sessionStorage.getItem('currentUser');
  }

  ngOnInit(): void {
    this.getProfileActivationRequests();
  }
  getProfileActivationRequests(): void {
    this.service.getProfileActivationRequests(this.currentUser).subscribe((response) => {
      this.profileRequests = response;
    },
      (error) => {
        console.log(error);
      }
    );
  }
  approveUser(): void {
    const dataMap:any ={
        requestId : this.profileRequest.request.requestId,
        username : this.profileRequest.user.username,
        message : this.approveReason
      };
      this.profileRequest=null;
      this.approveReason=null;
      console.log(dataMap);
    console.log(this.profileRequest);
    console.log(this.approveReason);
    this.service.approveProfile(dataMap).subscribe((response) => {
      if (response.statusCode === 200) {
        this.toaster.callSuccessToaster(response.status, response.message)
      }
      else if (response.statusCode === 100) {
        this.toaster.callWarningToaster(response.status, response.message);
      }
      else {
        this.toaster.callErrorToaster('Error', 'Internal Server Error');
      }
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
  rejectUser(): void {
    const dataMap:any ={
      requestId : this.profileRequest.request.requestId,
      username : this.profileRequest.user.username,
      message : this.rejectionReason
    };
    this.profileRequest=null;
    this.rejectionReason=null;
    console.log(dataMap);
    console.log(this.profileRequest);
    console.log(this.rejectionReason);
    this.service.rejectProfile(dataMap).subscribe((response) => {
      if (response.statusCode === 200) {
        this.toaster.callSuccessToaster(response.status, response.message)
      }
      else if (response.statusCode === 100) {
        this.toaster.callWarningToaster(response.status, response.message);
      }
      else {
        this.toaster.callErrorToaster('Error', 'Internal Server Error');
      }
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  setProfileRequest(profileRequest:IProfileRequest):void{
    this.profileRequest=profileRequest;
    console.log(this.profileRequest);
  }

  // submitApproval() {
  //   console.log(this.approveReason);
  //   this.approveReason=null;
  //   console.log(this.approveReason);
  // }
  // submitRejection() {
  //   console.log(this.rejectionReason);
  //   this.rejectionReason=null;
  //   console.log(this.rejectionReason);
  // }
}
