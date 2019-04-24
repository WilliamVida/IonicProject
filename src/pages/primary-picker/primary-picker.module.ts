import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimaryPickerPage } from './primary-picker';

@NgModule({
  declarations: [
    PrimaryPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimaryPickerPage),
  ],
})
export class PrimaryPickerPageModule {}
