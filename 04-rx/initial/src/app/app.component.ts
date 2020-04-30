import { Component } from '@angular/core';
import { Plugins, StatusBarStyle} from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { from, zip} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }


  initializeApp() {
    const {SplashScreen, StatusBar} = Plugins;
    zip(
        from(SplashScreen.hide()),
        from (StatusBar.setStyle({style: StatusBarStyle.Light}))
      ).subscribe(
        res => {},
        error => {}
    );
  }


}
