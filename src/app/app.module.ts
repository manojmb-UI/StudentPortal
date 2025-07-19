import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { InfotableComponent } from './infotable/infotable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader.interceptor';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    SignupComponent,
    SidenavbarComponent,
    InfotableComponent,
    LayoutComponent,
    HeaderComponent,
    TeacherComponent,
    HomeComponent,
    MyProfileComponent,
    BreadcrumbComponent,
    CreateRegistrationComponent,
    TeacherRegistrationComponent,
    ListTeacherComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [LoaderService,{provide:HTTP_INTERCEPTORS, useClass:LoaderInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
