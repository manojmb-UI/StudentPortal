import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent {
  updatebutton!: boolean;
  addbutton!: boolean;
  items: any;
  teacherform: any;
  currentitem: any = null;
  ModalHeaderName: any;
  constructor(private fb: FormBuilder, private apiservice: ApiService) { }
  ngOnInit() {
    this.teacherform = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      subject: ['', Validators.required],
      standard: ['', Validators.required],
      phonenumber: ['', Validators.required],
    })
    this.getteacher();
    this.updatebutton = false ;
    this.addbutton = true;
  }
  addteacherbtn(){
    this.updatebutton = false;
    this.addbutton = true;
    this.ModalHeaderName = 'Add Teacher'
  }
  postteacher(data: any) {
   
    this.updatebutton = false;
    this.addbutton = true;
    const data1 = this.teacherform.value;
    console.log(this.teacherform,'this.teacherform') ;
    
    this.apiservice.postteacher(data1).subscribe((res) => {
      this.getteacher();
    })
    this.teacherform.reset() ;
  }
  getteacher() {
    this.apiservice.getteacher().subscribe((res) => {
      this.items = res;
    })
  }
  editteacher(item: any) {
    this.ModalHeaderName = 'Edit Teacher'
    this.addbutton = false;
    this.updatebutton = true;
    this.currentitem = item;
    this.teacherform.patchValue({
      email: item.email,
      name: item.name,
      subject: item.subject,
      standard:item.standard,
      phonenumber: item.phonenumber
    });
  }
  updateteacher() {
    const updateditem = this.teacherform.value;
    this.apiservice.updateteacher(this.currentitem.id, updateditem).subscribe((res) => {
      this.getteacher();
      this.teacherform.reset();
    })
  }
  deleteteacher(id: number) {
    if (confirm('Are You Sure?')) {
      this.apiservice.deleteteacherr(id).subscribe((res) => {
        this.getteacher();
      })
    }

  }
}
