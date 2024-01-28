import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  currentDate!: Date;

  constructor(){
    setInterval(() => {
      this.currentDate = new Date();
    }, 1);
  }
}
