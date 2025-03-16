import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studentdata } from './student.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  POSTS:any;
  page:number = 1;
  count : number =0;
  tableSize :number=7;
  tableSizes: any = [3, 6, 9, 12];
  filteredStudentsData: any;
  selectedCity: string | undefined;
  showadd!: boolean;
  showupdate!: boolean;
  @Input() allstudentsdata: any;
  studentmodelobj: studentdata = new studentdata();
  formvalue!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      standard: ['', Validators.required],
      class:['',Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.getdata();
  }
  ascendingOrder = true;

  filterexample() {
    const newarray = this.allstudentsdata.slice();
     console.log(newarray, 'newarray')
    newarray.sort((a: any, b: any) => {
      // Use localeCompare for string comparison to handle different characters and case
      const orderMultiplier = this.ascendingOrder ? 1 : -1;
      console.log(orderMultiplier, 'orderMultiplier')
      return orderMultiplier * a.name.localeCompare(b.name);
    });

    console.log(newarray, 'newarray');
    this.filteredStudentsData = newarray;

    // Toggle the sorting order for the next click
    this.ascendingOrder = !this.ascendingOrder;
  }

  add() {
    this.showadd = true;
    this.showupdate = false;
  }
  edit(data: any) {
    this.showadd = false;
    this.showupdate = true;
    this.formvalue.controls['name'].setValue(data.name);
    this.formvalue.controls['email'].setValue(data.email);
    this.formvalue.controls['standard'].setValue(data.standard);
    this.formvalue.controls['class'].setValue(data.class);
    this.formvalue.controls['mobile'].setValue(data.mobile);
    this.formvalue.controls['city'].setValue(data.city);

    this.studentmodelobj.id = data.id;

  }
  update() {
    this.studentmodelobj.name = this.formvalue.value.name;
    this.studentmodelobj.email = this.formvalue.value.email;
    this.studentmodelobj.standard = this.formvalue.value.standard;
    this.studentmodelobj.class = this.formvalue.value.class;
    this.studentmodelobj.mobile = this.formvalue.value.mobile;
    this.studentmodelobj.city = this.formvalue.value.city;

    this.api
      .updatestudent(this.studentmodelobj.id, this.studentmodelobj)
      .subscribe(
        (res) => {
          this.formvalue.reset();
          this.getdata();
          alert('Updated Successfully');
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }

  addstudent() {
    this.studentmodelobj.name = this.formvalue.value.name;
    this.studentmodelobj.email = this.formvalue.value.email;
    this.studentmodelobj.standard = this.formvalue.value.standard;
    this.studentmodelobj.class = this.formvalue.value.class;
    this.studentmodelobj.mobile = this.formvalue.value.mobile;
    this.studentmodelobj.city = this.formvalue.value.city;

    this.api.poststudent(this.studentmodelobj).subscribe(
      (res) => {
        console.log(res);
        this.getdata();
        alert('Added Successfully');
        this.formvalue.reset();
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  filtering(event: any) {
    this.selectedCity = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    console.log(this.selectedCity);

    const originalData = this.allstudentsdata;

    if (this.selectedCity !== 'default') {
      const filteredData = originalData.filter(
        (student: any) => student.city.toLowerCase() === this.selectedCity
      );
      console.log(filteredData, 'filteredData');
      this.filteredStudentsData = filteredData;
    } else {
      this.filteredStudentsData = this.allstudentsdata;
    }
  }

  getdata() {
    this.api.getstudent().subscribe(
      (res) => {
        console.log(res, 'res');
        this.allstudentsdata = res;
        this.filteredStudentsData = this.allstudentsdata;
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
  deletestud(data: any) {
    if (confirm('Are you sure??')) {
      this.api.deletestudent(data.id).subscribe((res) => {
        alert('Deleted Successfully');
        this.getdata();
      });
    }
  }
  ontabledatachange(event : any){
    this.page = event;
    this.filteredStudentsData;
  }
  ontablesizechange(event : any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.filteredStudentsData;
  }
 
}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
