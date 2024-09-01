import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProfileRequest } from 'src/app/model/profileRequest.model';
import { RequestService } from 'src/app/services/request.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-requests',
  templateUrl: './approve-requests.component.html',
  styleUrls: ['./approve-requests.component.css']
})

export class ApproveRequestsComponent implements OnInit {

  profileRequests: IProfileRequest[] = [];
  profileRequest: IProfileRequest;
  approveReason: string;
  rejectionReason: string;
  constructor(private service: RequestService, private toaster: ToasterService,private dialog:MatDialog,private modalService: NgbModal,private router:Router) {}

  ngOnInit(): void {
    this.getProfileActivationRequests();
  }
  getProfileActivationRequests(): void {
    this.service.getProfileActivationRequests(window.sessionStorage.getItem('username')).subscribe((response) => {
      this.profileRequests = response;
    },
      (error) => {
        console.log(error);
      }
    );
  }
  approveUser(): void {
    const dataMap: any = {
      requestId: this.profileRequest.request.requestId,
      username: this.profileRequest.userDetails.username,
      message: this.approveReason,
      actionBy: window.sessionStorage.getItem('username')
    };
    this.profileRequest = null;
    this.approveReason = null;
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
    const dataMap: any = {
      requestId: this.profileRequest.request.requestId,
      username: this.profileRequest.userDetails.username,
      message: this.rejectionReason,
      actionBy: window.sessionStorage.getItem('username')
    };
    this.profileRequest = null;
    this.rejectionReason = null;
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

  open(content: any,profileRequest: IProfileRequest) {
    this.profileRequest = profileRequest;
    console.log(this.profileRequest);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        console.log(`Closed with: ${result}`);
      },
      (reason) => {
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === 'by pressing ESC') {
      return 'by pressing ESC';
    } else if (reason === 'by clicking on a backdrop') {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
