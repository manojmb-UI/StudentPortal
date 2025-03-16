import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { LayoutComponent } from './layout/layout.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component'
import { authGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard], 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'student', component: StudentComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'myprofile' , component : MyProfileComponent},
      { path: 'home', component: HomeComponent },
    ],
  },
 
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignupComponent }, 
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
