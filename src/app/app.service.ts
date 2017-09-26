import { Injectable } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class AppService {

  constructor(private http: Http) { }

  downloadData()  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map((response: Response)=> response.json())
  }
}
