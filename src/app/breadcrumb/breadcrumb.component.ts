import { Component } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb-service/breadcrumb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<any[]> | any;
  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.loadBreadcrumb();
  }
  loadBreadcrumb() {
    this.breadcrumbService.breadcrumb$.subscribe((res)=>{
      this.breadcrumbs$ = res;
  });
    console.log(this.breadcrumbs$, 'this.breadcrumb from breadcrumb component');;
  }
}
