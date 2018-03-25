import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apikey = 'c530be6f7e497a32'; // api key of our service
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q'; // the format of the url
  }

  getweather(city, state){ //makes the url useable
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
  }

}
