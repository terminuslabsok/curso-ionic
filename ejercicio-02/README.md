# Ejercicio 2

El objetivo de este ejercicio es crear la visualización de una pregunta.
Tomar cómo guia el template de app de listas que probee ionic

# Solución

## 1- Crear una nueva página

```bash
ng g page verPregunta
```

## 2- Modificar la ruta 
Modificar la ruta autogenerada para recibir el parámetro id.
En el archivo app-routing.module.ts


Cambiar

```ts
path: 'ver-pregunta/:id'
```
por

```ts
path: 'preguntas/:id'
```

## 3- Modificar el componente
Añadir la lóginca en el archivo ver-pregunta.page.ts

```ts
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

```

y la vista en el template ver-pregunta.page.html

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons>
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true" *ngIf="pregunta">
  <ion-item>
    <ion-avatar >
      <img src="{{pregunta.avatarUrl ? pregunta.avatarUrl : 'assets/profile.png'}}">
    </ion-avatar>
    <ion-label class="ion-text-wrap  ion-padding-start" >
      <h2>
        {{ pregunta.nombreUsuario }}
      </h2>
    </ion-label>
  </ion-item>
  
  <div class="ion-padding">
    <h1>{{ pregunta.preguntaTitulo }}</h1>
    <p>
      {{pregunta.preguntaDescripcion}}
    </p>
  </div>
</ion-content>


```

