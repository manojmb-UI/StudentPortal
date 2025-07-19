import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent {
  firstFormGroup: any;
  secondFormGroup: any;
  userForm: any;
  previewData: any;
  previewpage: boolean = false;
  patchId:any;
  patchUserDetails: any;
  constructor(private fb: FormBuilder,private http: HttpClient, private commonservice: CommonService, private route: Router, private api: ApiService, private actRoute : ActivatedRoute) { }
  ngOnInit() {
    this.initForm();
    this.getRouteParams();
  }
  getRouteParams(){
    debugger
    this.patchId = this.actRoute.snapshot.paramMap.get('id');
    if(this.patchId){
      this.patchDetails();
    }
  }
 patchDetails() {
  debugger;
  this.api.getTeacherData().subscribe(res => {
    console.log(res);

    this.patchUserDetails = res.find((a: any) => a.id == this.patchId);

    if (this.patchUserDetails) {
      this.userForm.patchValue({
        name: this.patchUserDetails.name,
        email: this.patchUserDetails.email,
        contact: this.patchUserDetails.contact,
        gender: this.patchUserDetails.gender
      });
    } else {
      console.warn('No user found with ID:', this.patchId);
    }
  });
}

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required],
      file: [null, Validators.required],
      subjects: this.fb.array([this.createSubjectGroup()]),
    });
  }
  get subjects(){
    return this.userForm.get('subjects') as FormArray
  }
  addSubject(){
     this.subjects.push(this.createSubjectGroup());
  }
  createSubjectGroup(){
    this.fb.group({
      subject : ['', Validators.required],
      year_of_exp: ['', Validators.required],
    })
  }
  removeSubject(index:number){
    this.subjects.removeAt(index);
  }
  @ViewChild('fileInput') fileInput: any;

  onPreview() {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    this.previewpage= true
    this.previewData = this.userForm.value;
  }
  onSubmit() {
  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
    return;
  }

  const formData = this.userForm.value;
  console.log('Form submitted:', formData);

  this.previewpage = false;
  if(this.patchId){
    this.api.updateTeacherData(this.patchId, this.userForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
  else{
  this.api.postTeacherData(this.userForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
 
  this.route.navigate(['/register'])
}

  onBack(){
    this.previewpage = false;
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.userForm.patchValue({ file: file });
    }
  }

  removeFile() {
    this.userForm.patchValue({ file: null });
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

}
