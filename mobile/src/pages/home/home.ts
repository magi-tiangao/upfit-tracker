import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

interface BleDevice {
  id: string,
  name: string,
  advertising: any,
  rssi: number
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  devices: BleDevice[] = [];

  constructor(public navCtrl: NavController, private ble: BLE) {
    ble.scan([], 5).subscribe(data => {
      console.log(JSON.stringify(data));
      this.devices.push(data);
      console.log(JSON.stringify(this.devices));
    })
  }
}
