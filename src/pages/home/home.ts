import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VatratePage } from '../vatrate/vatrate';
import { CurrencyPage } from '../currency/currency';
import { LocationPage } from '../location/location';
import { PrimaryPredictionPage } from '../primary-prediction/primary-prediction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toVatPage() {
    this.navCtrl.push(VatratePage);
  }

  toCurrencyPage() {
    this.navCtrl.push(CurrencyPage);
  }

  toLocationPage() {
    this.navCtrl.push(LocationPage);
  }

  toPrimaryPage() {
    this.navCtrl.push(PrimaryPredictionPage);
  }

}
