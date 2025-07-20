import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  requestCall(url: string, apiMethod: string, data: any = null) {
    const options: any = {};

    if (data) {
      if (apiMethod === 'GET' || apiMethod === 'DELETE') {
        options.params = data;
      } else {
        options.body = data;
      }
    }

    return this.http.request(apiMethod, url, options);
  }

}
