import { Component, OnInit } from '@angular/core';
import { PreguntasService, IPregunta } from '../services/preguntas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pregunta',
  templateUrl: './ver-pregunta.page.html',
  styleUrls: ['./ver-pregunta.page.scss'],
})
export class VerPreguntaPage implements OnInit {

  pregunta: IPregunta;

  constructor(
    private pregutnasService: PreguntasService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pregunta = this.pregutnasService.getPregunta(parseInt(id, 10));
  }

}
