import { Component, OnInit } from '@angular/core';
import { IUserDetails } from 'src/app/model/userDetails.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  userDetails:IUserDetails;
  reportees:IUserDetails[]=[]
  teamMembers:any={}

  constructor(private service:ProfileService){
    this.userDetails={
      firstName:null,
      lastName:null,
      emailId:null,
      empId:null,
      username:null,
      departmentName:null,
      designation:null,
      reportingTo:null,
      gender:null
    };
    this.teamMembers={
      pm:[],
      sse:[],
      se:[],
      ase:[],
      t:[]
    }
  }
  
  ngOnInit(): void {
    this.userDetails=JSON.parse(window.sessionStorage.getItem('userDetails'));
    this.getReportees();
    this.getTeamMembers();
  }

  getReportees():void{
    this.service.getReportees(window.sessionStorage.getItem('username')).subscribe((response)=>{
      this.reportees=response;
    },
    (error)=>{
      console.log(error);
    });
  }

  // getUserDetails():void{
  //   this.service.getUserDetails(window.sessionStorage.getItem('username')).subscribe((response)=>{
  //     this.userDetails=response;
  //   },
  //   (error)=>{
  //     console.log(error);
  //   });
  // }

  getTeamMembers():void{
    this.service.getTeamMembers(JSON.parse(window.sessionStorage.getItem('userDetails')).empId).subscribe((response)=>{
      this.teamMembers=response;
      console.log(this.teamMembers);
    },
    (error)=>{
      console.log(error);
    });
  }
}
