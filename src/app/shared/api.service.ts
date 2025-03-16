import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  postteacher(data:any){
    return this._http.post('http://localhost:3000/teachers', data)
  }
  getteacher(){
    return this._http.get('http://localhost:3000/teachers');
  }
  updateteacher(id:number, data:any): Observable<any>{
    // return this._http.put<any>('http://localhost:3000/teachers/'+id,data)
    return this._http.put(`http://localhost:3000/teachers/${id}`, data);
  }
  deleteteacherr(id:number){
    debugger;
    return this._http.delete('http://localhost:3000/teachers/'+id)
  }

  poststudent(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).
    pipe(map((res:any)=>{
      return res;
    }))
  }
  getstudent(){
    return this._http.get<any>("http://localhost:3000/posts").
    pipe(map((res:any)=>{
      return res;
    }))
  }
  updatestudent(id:number,data:any){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).
    pipe(map((res:any)=>{
      return res;
    }))
  }
  deletestudent(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).
    pipe(map((res:any)=>{
      return res;
    }))
  }
  getProfile(){
    return
  }

}
