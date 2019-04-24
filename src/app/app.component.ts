import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { VatProvider } from '../providers/vat-prov/vat-prov';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = HomePage;
  vats: any = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private vatr: VatProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.vatr.getVat().subscribe(data => {
      this.vats = data.vats;
    });
  }

}
