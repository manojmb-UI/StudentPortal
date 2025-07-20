import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {
  teacherList:any;
 constructor(private http:HttpClient, private route:Router, private api:ApiService){

 }
 ngOnInit(){
  this.getTeacherList();
 }
 getTeacherList(){
  this.api.getTeacherData().subscribe(res=>{
    this.teacherList=res;
  })
 }
 addteacherbtn(){
  this.route.navigate(['/register/create-registeration'])
 }
 editteacher(event:any){
  console.log(event);
  this.route.navigate([`/register/create-registeration/${event.id}`])
 }
 deleteteacher(id:any){
  this.api.deleteTeacherData(id).subscribe(res=>{
    alert('Deleted Successfully');
    this.getTeacherList();
  })
 }
}
