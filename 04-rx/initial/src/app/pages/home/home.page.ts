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
    this.preguntas = this.preguntasService.getPreguntas();
  }



  refresh(ev) {
    setTimeout(() => {
      this.preguntas = this.preguntasService.getPreguntas();
      ev.detail.complete();
    }, 3000);
  }


}
