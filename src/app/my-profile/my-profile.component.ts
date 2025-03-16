import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  profileName:any;
  profileEmail:any;
  profileNumber:any;
  editScreen: boolean = false;

   constructor(){}

   ngOnInit(){
    this.getBasicDetails();
   }
   getBasicDetails(){
      this.profileName = localStorage.getItem('name');
      this.profileEmail = localStorage.getItem('email');
      this.profileNumber = localStorage.getItem('mobile');

   }  
   editProfile(){
    this.editScreen = true;
   }
}
