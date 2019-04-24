import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the VatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VatProvider {

  constructor(public http: HttpClient) {
    console.log('Hello VatProvider Provider');
  }

  getVat(): Observable<any> {
    return this.http.get('https://jsonblob.com/api/jsonBlob/a7583055-5b95-11e9-bdfb-716ad07670c1');
  }

}
