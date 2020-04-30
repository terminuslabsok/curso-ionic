import { Component, OnInit } from '@angular/core';
import { IPregunta, EnumEstadoPagina } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { EstadoPagina } from '../../models/app.model';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  estadoPagina = new EstadoPagina(EnumEstadoPagina.CARGANDO);
  preguntas: IPregunta[] = [];

  constructor(private preguntasService: PreguntasService) {
  }

  ngOnInit(): void {
    this.initFirebase();
  }

  ionViewWillEnter() {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.estadoPagina.estado = EnumEstadoPagina.CARGANDO;
    this.preguntasService.getPreguntas()
    .subscribe(res => {
      this.preguntas = res;
      this.estadoPagina.estado = EnumEstadoPagina.DATOS_CARGADOS;
    }, error =>{
      this.estadoPagina.setError(error);
    });
  }


  refresh(ev) {
    this.estadoPagina.estado = EnumEstadoPagina.CARGANDO;
    this.preguntasService.getPreguntas()
    .subscribe(res => {
      ev.detail.complete();
      this.preguntas = res;
      this.estadoPagina.estado = EnumEstadoPagina.DATOS_CARGADOS;
    }, error =>{
      ev.detail.complete();
      this.estadoPagina.setError(error);
    });
  }





  initFirebase() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

}
