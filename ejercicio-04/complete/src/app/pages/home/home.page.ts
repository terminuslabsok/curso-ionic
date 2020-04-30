import { Component, OnInit } from '@angular/core';
import { IPregunta } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  preguntas: IPregunta[] = [];

  constructor(private preguntasService: PreguntasService) {
  }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.preguntasService.getPreguntas()
    .subscribe(res => this.preguntas = res );
  }


  refresh(ev) {
    this.cargarPreguntas();
    ev.detail.complete();
  }


}
