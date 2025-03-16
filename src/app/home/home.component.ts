import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  getStudentList: any[] =[];
  getStudentListCount:any;
  currentUserName: any;
  getTeacherList: any;
  getTeacherListCount:any;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.getCurrentUser();
    this.getstudent();
    this.getteacher();
  }
  getCurrentUser() {
    this.currentUserName = localStorage.getItem('name');
  }
 
  getstudent() {
    this.api.getstudent().subscribe((res) => {
      this.getStudentList = res;
      this.getStudentListCount = this.getStudentList.length;
    })
  }
  getteacher() {
    this.api.getteacher().subscribe((res) => {
      this.getTeacherList = res;
      this.getTeacherListCount = this.getTeacherList.length;
    })
  }
}
