import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpHelperProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpHelperProvider Provider');
  }

  public getHttp(url: string, options: {}) : Observable<Object>  {
    return this.http.get(url, options)
  }

  public postHttp(url: string, body: any, options: {}) : Observable<Object> {
    return this.http.post(url, body, options)
  }

}
