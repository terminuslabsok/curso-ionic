# Ejercicio 3

Correr aplicación en iOS y Android


## Usando cordova

Para android

```bash
ionic cordova platform add android
ionic cordova run android
```
Para ios

```bash
ionic cordova platform add ios
ionic cordova run ios
```

## Usando capacitor

Se añade capacitor al proyecto
```bash
ionic integrations enable capacitor
npx cap add android
```
Se eliminan los plugins de cordova que capacitor ya incluye 

```bash
npm uninstall @ionic-native/core @ionic-native/splash-screen @ionic-native/status-bar --save

```
Eliminar las dependencias no necesarias en app.module.ts, debe quedar:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


```

Cambiar app.component.ts para que use los plugins desde capacitor.
Debe quedar:

```ts
import { Component } from '@angular/core';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
import { Platform } from '@ionic/angular';

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

  async initializeApp() {
    const {SplashScreen, StatusBar} = Plugins;
    try{

      await SplashScreen.hide();
      await StatusBar.setStyle({style: StatusBarStyle.Light});

      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({color: '#CDCDCD'});
      }

    } catch (err){
      console.log('This is normal in a browser', err);
    }
  }
}


```
Correr usando capacitor
```bash
ionic build --prod
npx cap copy
npx cap open android
npx cap open ios
```




