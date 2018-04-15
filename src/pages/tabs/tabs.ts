import { Component } from '@angular/core';

import { WelcomePage } from '../welcome/welcome';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PlantindexPage } from '../plantindex/plantindex';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  welcome = WelcomePage;
  signup = SignupPage;
  login = LoginPage;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PlantindexPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
