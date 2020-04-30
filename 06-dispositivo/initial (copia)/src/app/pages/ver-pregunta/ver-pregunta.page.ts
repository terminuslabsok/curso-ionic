import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPregunta, EstadoPagina, EnumEstadoPagina } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';

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
    private activatedRoute: ActivatedRoute
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

}
