import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PrimaryPredictionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primary-prediction',
  templateUrl: 'primary-prediction.html',
})
export class PrimaryPredictionPage {
  information: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  openStatusPage() {
    this.navCtrl.push('PrimaryPickerPage');
  }

  ionViewWillEnter() {
    this.storage.get("prediction").then((val) => {
      this.information = val;
    }).catch((err) => {
      console.log(err);
    });
  }
  
}