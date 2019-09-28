import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpHelperProvider } from '../../providers/http-helper/http-helper';
import { OverviewPage } from '../overview/overview';
import { StorePage } from '../store/store';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any = OverviewPage
  tab2: any = StorePage
  tab3: any = ProfilePage

  constructor(public navCtrl: NavController, public httpProvider: HttpHelperProvider) {

  }

  public onClick() {
    console.log("sample")
    this.httpProvider
    .getHttp("https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=nsfwreligiouspolitical",{})
    .subscribe(x => {
      console.log(x)
    })
  }

}
