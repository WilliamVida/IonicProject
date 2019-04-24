import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CurrencyProvProvider } from '../../providers/currency-prov/currency-prov';

/**
 * Generated class for the CurrencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html',
})
export class CurrencyPage {

  countryCodes = [];
  countryNames = new Map();

  resultRate: any;
  swappedRate: any;

  fromValue: any;
  toValue: any;

  fromCurr: any = 'EUR'; // default values
  toCurr: any = 'USD'; // default values

  constructor(public navCtrl: NavController, public navParams: NavParams, protected cuService: CurrencyProvProvider, public http: HttpClient) {
  }



  ngOnInit() {
    this.fetchCountries();
    this.getCurrencyRate();
  }

  /* An asynchronous function which retrieves 
  CountryCode List
  */
  async fetchCountries() {
    try {
      const res = await this.cuService.getCountries();
      for (let x in res['results']) {
        this.countryCodes.push(x);
        this.countryNames.set(x, res['results'][x].currencyName);
      }
    } catch (err) {
      console.error(err);
    }
    console.log(this.countryNames);
  }

  async getCurrencyRate() {
    let from = this.fromCurr;
    let to = this.toCurr;
    try {
      const exchangeRate = await this.cuService.getExchangeRate(from, to);
      let rate = exchangeRate[from + "_" + to].val;
      this.resultRate = rate;
    }
    catch (err) {
      console.error(err);
    }
  }

  calculateCurrencyOne() {
    this.toValue = this.fromValue * parseFloat(this.resultRate);
    console.log('Final Value: ' + this.toValue);
  }

  calculateCurrencyTwo() {
    this.fromValue = this.toValue / parseFloat(this.resultRate);
    console.log('Final Value: ' + this.toValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencyPage');
  }

}
