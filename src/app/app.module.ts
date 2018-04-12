import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //import httpmodule

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';

//import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//firebase configuaration
var config = {
  apiKey: "AIzaSyBip5RposPD4fwJWYwvaXoAtCcb55hzM7k",
  authDomain: "myplant-1dcc9.firebaseapp.com",
  databaseURL: "https://myplant-1dcc9.firebaseio.com",
  projectId: "myplant-1dcc9",
  storageBucket: "myplant-1dcc9.appspot.com",
  messagingSenderId: "115928435512"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import httpmodule
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config), //import angular modules
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider
  ]
})
export class AppModule {}
