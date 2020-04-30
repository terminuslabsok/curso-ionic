import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.scss'],
})
export class ErrorInfoComponent implements OnInit, OnChanges {


  @Input() error: any;
  @Output() reintentarClick: EventEmitter<any> = new EventEmitter();

  public mensajeError: string[];

  constructor() {
  }

  ngOnInit() {
    this.inicializar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.inicializar();
  }


  inicializar() {
    this.mensajeError = [];
    if (this.error != null) {
      if (Array.isArray(this.error)) {
        for (const mensaje of this.error) {
          if (mensaje.hasOwnProperty('mensaje')) {
            this.mensajeError.push(mensaje.mensaje);
          }
        }
      }
    }

    if (this.mensajeError.length == 0) {
      this.mensajeError.push('Error inesperado, vuelva a intentarlo más tarde.');
    }
  }


  reintentar() {
    this.reintentarClick.emit();
  }


}
