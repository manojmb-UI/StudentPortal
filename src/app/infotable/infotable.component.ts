import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infotable',
  templateUrl: './infotable.component.html',
  styleUrls: ['./infotable.component.css']
})
export class InfotableComponent {
   @Input() allstudentsdata: any;
   
}
