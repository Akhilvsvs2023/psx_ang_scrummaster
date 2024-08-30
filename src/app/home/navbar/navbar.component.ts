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
  isHovered: boolean = false;
  showTask: boolean = false;
  showRequest: boolean = false;

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

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
  showMenu(menu:number):void{
    if(menu===1){
      this.showTask=!this.showTask;
    }else if(menu===2){
      this.showRequest=!this.showRequest;
    }
  }
  
}
