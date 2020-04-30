import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPregunta, EstadoPagina, EnumEstadoPagina } from 'src/app/models/app.model';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { IErroresInput } from 'src/app/shared/error-input/error-input.component';

@Component({
  selector: 'app-preguntar',
  templateUrl: './preguntar.page.html',
  styleUrls: ['./preguntar.page.scss'],
})
export class PreguntarPage implements OnInit {

  editForm = this.fb.group({
    id: [],
    avatarUrl: [],
    nombreUsuario: [Validators.required],
    preguntaTitulo: [Validators.required],
    preguntaDescripcion: [Validators.required]
  });

  validationMessages: IErroresInput = {
    nombreUsuario: [
      { type: 'required', message: 'El nombre es requerido.' }
    ],
    preguntaTitulo: [
      { type: 'required', message: 'El título es requerido.' }
    ],
    preguntaDescripcion: [
      { type: 'required', message: 'La descripción es requerida.' }
    ],
  };

  pregunta: IPregunta;
  estadoPagina = new EstadoPagina(EnumEstadoPagina.DATOS_CARGADOS);


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
      this.estadoPagina.estado = EnumEstadoPagina.CARGANDO;
      this.preguntaService.addPregunta(this.pregunta)
        .subscribe(res => {
          this.estadoPagina.estado = EnumEstadoPagina.DATOS_CARGADOS;
          this.router.navigateByUrl(`/home`);
        }, err => {
          this.estadoPagina.setError(err);
        });
    }
  }



  updateModel(values: Object) {
    (Object as any).assign(this.pregunta, values);
  }


}
