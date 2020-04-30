import { Component, OnInit } from '@angular/core';
import { IPregunta, EnumEstadoPagina } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { EstadoPagina } from '../../models/app.model';

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


}
