import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPregunta, EstadoPagina, EnumEstadoPagina } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-pregunta',
  templateUrl: './ver-pregunta.page.html',
  styleUrls: ['./ver-pregunta.page.scss'],
})
export class VerPreguntaPage implements OnInit {

  estadoPagina = new EstadoPagina(EnumEstadoPagina.CARGANDO);
  pregunta: IPregunta;

  constructor(
    private pregutnasService: PreguntasService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarPregunta();
  }

  cargarPregunta() {
    this.estadoPagina = new EstadoPagina(EnumEstadoPagina.CARGANDO);
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pregutnasService.getPregunta(parseInt(id, 10))
    .subscribe(res => {
      this.pregunta = res;
      this.estadoPagina = new EstadoPagina(EnumEstadoPagina.DATOS_CARGADOS);
    }, err => {
      this.estadoPagina.setError(err);
    });

  }

  compartir() {
    const { Share } = Plugins;
    Share.share({
      title: this.pregunta.preguntaTitulo,
      text: this.pregunta.preguntaDescripcion,
      url: 'https://curso-ionic-pregutnas.web.app/pregunta/' + this.pregunta.id,
      dialogTitle: 'Compartir pregunta'
    }).then(res => {}, error => {
      this.mostrarErrorCompartir();
    });
  }


  async mostrarErrorCompartir() {
    const alert = await this.alertController.create({
      header: 'Error al compartir',
      message: 'Su dispositivo no permite la compartir',
      buttons: ['Aceptar']
    });
    await alert.present();
  }


}
