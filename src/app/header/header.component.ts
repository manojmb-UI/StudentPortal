import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUserName:any;
  profileUserName:any;
  ngOnInit(){
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.currentUserName = localStorage.getItem('name');
    this.profileUserName = this.currentUserName.substring(0, 2).toUpperCase();
  }
  logout(){
    localStorage.removeItem('userToken')
  }

}
