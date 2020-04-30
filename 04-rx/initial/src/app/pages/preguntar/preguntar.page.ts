import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPregunta } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-preguntar',
  templateUrl: './preguntar.page.html',
  styleUrls: ['./preguntar.page.scss'],
})
export class PreguntarPage implements OnInit {

  editForm = this.fb.group({
    id: [],
    avatarUrl: [],
    nombreUsuario: [],
    preguntaTitulo: [],
    preguntaDescripcion: []
  });
  pregunta: IPregunta;

  constructor(
    private router: Router,
    private preguntaService: PreguntasService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.pregunta = {
      id: null,
      avatarUrl: null,
      nombreUsuario: null,
      preguntaTitulo: null,
      preguntaDescripcion: null
    };
    this.editForm.patchValue(this.pregunta);
  }


  save() {
    this.editForm.updateValueAndValidity();

    if (this.editForm.valid) {
      // update the model
      this.updateModel(this.editForm.value);
      this.preguntaService.addPregunta(this.pregunta);
      this.router.navigateByUrl(`/`);
    }
  }



  updateModel(values: Object) {
    (Object as any).assign(this.pregunta, values);
  }


}
