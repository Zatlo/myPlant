import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenorientation: ScreenOrientation) {
  }

  getCurrentScreenOrientation(){
    console.log(this.screenorientation.type);
  }

  async lockScreenOrientation(){
    try{
      this.screenorientation.lock(this.screenorientation.ORIENTATIONS.PORTRAIT);
    }catch(error){
      console.error(error);
    }
  }

  unlockScreenOrientation(){
    this.screenorientation.unlock();
  }

  observeScreenOrientation(){
    this.screenorientation.onChange();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){
    /*let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options);*/
    this.navCtrl.setRoot(LoginPage);
  }

  signup(){
    /*let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options);*/
    this.navCtrl.setRoot(SignupPage);
  }
}
