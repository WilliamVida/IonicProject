import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';

import { CurrencyPage } from '../pages/currency/currency';
import { CurrencyProvProvider } from '../providers/currency-prov/currency-prov';

import { VatratePage } from '../pages/vatrate/vatrate';
import { VatProvider } from '../providers/vat-prov/vat-prov';

import { LocationPage } from '../pages/location/location';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicStorageModule } from '@ionic/storage';
import { PrimaryPredictionPage } from '../pages/primary-prediction/primary-prediction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VatratePage,
    CurrencyPage,
    LocationPage,
    PrimaryPredictionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VatratePage,
    CurrencyPage,
    LocationPage,
    PrimaryPredictionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    VatProvider,
    CurrencyProvProvider,
    Geolocation
  ]
})
export class AppModule { }
