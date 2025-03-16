import { Component, Input } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title = 'student-app';
  constructor(public loaderService: LoaderService){}
  
}
