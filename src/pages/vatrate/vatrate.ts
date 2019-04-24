import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VatProvider } from '../../providers/vat-prov/vat-prov';

/**
 * Generated class for the VatratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vatrate',
  templateUrl: 'vatrate.html',
})
export class VatratePage {

  vats: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private vpp: VatProvider) {
  }

  ionViewDidLoad() {
    this.vpp.getVat().subscribe((data) => {
      this.vats = data.rates;
      console.log(this.vats);
    });
  }

}
