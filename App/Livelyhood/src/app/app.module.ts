import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpHelperProvider } from '../providers/http-helper/http-helper';
import { HttpClientModule} from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { StorePage } from '../pages/store/store';
import { ProfilePage } from '../pages/profile/profile';
import { EventPage } from '../pages/event/event';
import { BookingPage } from '../pages/booking/booking';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { OverviewPage } from '../pages/overview/overview';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverviewPage,
    StorePage,
    ProfilePage,
    EventPage,
    BookingPage,
    ConfirmationPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverviewPage,
    StorePage,
    ProfilePage,
    EventPage,
    BookingPage,
    ConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    HttpHelperProvider
  ]
})
export class AppModule {}
