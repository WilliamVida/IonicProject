import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CurrencyProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrencyProvProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CurrencyProvProvider Provider');
  }

  getCountries() {
    return this.http.get('https://free.currencyconverterapi.com/api/v6/currencies?apiKey=d27c2ff0c515bc488e59').toPromise();
  }

  getExchangeRate(from: String, to: String) {
    return this.http.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y&apiKey=d27c2ff0c515bc488e59`).toPromise();
  }
}
