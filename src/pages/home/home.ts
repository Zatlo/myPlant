import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'; // import our weatherprovider here

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    state:string
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) { //inject our dependecy of weatherprovider

  }

  ionViewWillEnter(){ // will fire off whenever the componenet is loaded
    this.location = {
      city: 'Merced',
      state: 'CA'
    }

    this.weatherProvider.getweather(this.location.city, this.location.state).subscribe(weather => {
      this.weather = weather["current_observation"];
    })
  } 

}
