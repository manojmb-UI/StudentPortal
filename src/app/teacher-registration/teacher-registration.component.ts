import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent {
  teacherRegistrationForm: any;
  constructor(private fb: FormBuilder){}
  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.teacherRegistrationForm = this.fb.group({
      teachername : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      subjects : this.fb.array([this.createSubject()])
    })
  }
  
  get subjects(): FormArray{
    return this.teacherRegistrationForm.get('subjects') as FormArray;
  }
  createSubject(){
   return this.fb.group({
      subject : ['', Validators.required],
    })
  }
  addSubject(){
    this.subjects.push(this.createSubject());
  }
  removeSubject(index:number){
    this.subjects.removeAt(index);
  }
  submitForm(){
    if(this.teacherRegistrationForm.invalid){
      this.teacherRegistrationForm.markAllAsTouched();
      return;
    }
    const payload = JSON.stringify(this.teacherRegistrationForm.value);
    console.log(payload);
  }
}
