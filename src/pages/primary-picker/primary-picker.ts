import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PrimaryPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primary-picker',
  templateUrl: 'primary-picker.html',
})
export class PrimaryPickerPage {
  status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimaryPickerPage');
  }

  onSave() {
    console.log(this.status);
    this.storage.set("status", this.status);
    this.navCtrl.pop();
  }

}
