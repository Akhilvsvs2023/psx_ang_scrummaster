import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user!:IUser
  currentDate!: Date;

  constructor(private router:Router){
    setInterval(() => {
      this.currentDate = new Date();
    }, 1);
    const value=sessionStorage.getItem('user');
    const parsedValue: IUser | null = value ? JSON.parse(value) : null;
    this.user=parsedValue;
  }
  logout():void{
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
