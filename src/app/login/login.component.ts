import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginform!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,private _http:HttpClient) {}
  ngOnInit(){
   this.loginform = this.formBuilder.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
   })
  }
  login(){
    localStorage.setItem('userToken', 'authenticated');
    this._http.get<any>('http://localhost:3000/signup').subscribe((res)=>{
      console.log(this.loginform.controls)
      const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
      })
      if(user){
        console.log(user,"userrr")
        const name = user.name;
        const email = user.email;
        const mobile = user.mobile;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('mobile', mobile);
        alert('Login Successful');
        this.loginform.reset();
        this.router.navigate(['home'])
      }
      else{
        alert('User not found');
      }
    },
    err=>{
      alert('Something went wrong');
    })
  }
}
