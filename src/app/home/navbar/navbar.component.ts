import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserDetails } from 'src/app/model/userDetails.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userDetails !:IUserDetails;
  currentDate!: Date;

  constructor(private router:Router){
    setInterval(() => {
      this.currentDate = new Date();
    }, 1);
    const value=sessionStorage.getItem('userDetails');
    const parsedValue: IUserDetails | null = value ? JSON.parse(value) : null;
    this.userDetails=parsedValue;
  }
  logout():void{
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
