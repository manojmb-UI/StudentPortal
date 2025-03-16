import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUserName:any;
  profileUserName:any;
  constructor(private router:Router){}
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
  goToProfile(){
   this.router.navigateByUrl('/myprofile')
  }

}
