import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export interface IErrorInput {
  type: string;
  message: string;
}
export interface IErroresInput {
  [key: string]: IErrorInput[];
}


@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss'],
})
export class ErrorInputComponent implements OnInit {


  @Input() validationMessages: IErrorInput[];
  @Input() control: AbstractControl;


  constructor() { }

  ngOnInit() {}

}
