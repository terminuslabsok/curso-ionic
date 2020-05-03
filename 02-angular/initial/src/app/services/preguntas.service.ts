import { Injectable } from '@angular/core';

export interface IPregunta {
  id: number;
  avatarUrl: string;
  nombreUsuario: string;
  preguntaTitulo: string;
  preguntaDescripcion: string;
}


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private preguntas: IPregunta[] = [
    {
      id: 1,
      avatarUrl: null,
      nombreUsuario: 'Juan Perez',
      preguntaTitulo: '¿Lorem ipsum?',
      preguntaDescripcion:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
      id: 2,
      avatarUrl: null,
      nombreUsuario: 'Juan Perez',
      preguntaTitulo: '¿Lorem ipsum?',
      preguntaDescripcion:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
      id: 3,
      avatarUrl: null,
      nombreUsuario: 'Juan Perez',
      preguntaTitulo: '¿Lorem ipsum?',
      preguntaDescripcion:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];


  constructor() { }

  getPreguntas() {
    return this.preguntas;
  }

  addPregunta( p: IPregunta) {
    p.id = this.preguntas.length + 1;
    this.preguntas.unshift(p);
  }
  
  
  getPregunta(id: number) {
    for (let p of this.preguntas) {
      if (p.id === id) {
        return p;
      }
    }
  }

}
