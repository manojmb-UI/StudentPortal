import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private readonly _breadcrumb$ = new BehaviorSubject<any>([])

  readonly breadcrumb$ = this._breadcrumb$.asObservable();

  constructor() { }

  ngOnInit(){

  }
  setCustomBreadCrumb(breadcrumbs: any){
    this._breadcrumb$.next(breadcrumbs);
  }
 
}
