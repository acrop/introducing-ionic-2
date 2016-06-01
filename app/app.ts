import {ViewChild} from '@angular/core';
import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SettingsPage} from './pages/settings/settings';
import {SearchPage} from './pages/search/search';
import {JSONP_PROVIDERS} from '@angular/http';
import {ContactusPage} from './pages/contactus/contactus';
import {Itunes} from './itunes/itunes';
import {LanguageSetting} from './pages/settings/language';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [JSONP_PROVIDERS, Itunes, LanguageSetting]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SearchPage;
  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search...', component: SearchPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Contact us', component: ContactusPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);

      // Styling the StatusBar
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
