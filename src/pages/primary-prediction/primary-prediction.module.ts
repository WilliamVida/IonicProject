import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimaryPredictionPage } from './primary-prediction';

@NgModule({
  declarations: [
    PrimaryPredictionPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimaryPredictionPage),
  ],
})
export class PrimaryPredictionPageModule {}
