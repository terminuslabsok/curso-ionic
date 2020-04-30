import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInfoComponent } from './error-info/error-info.component';
import { IonicModule } from '@ionic/angular';
import { ErrorInputComponent } from './error-input/error-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ErrorInfoComponent, ErrorInputComponent],
  exports: [ErrorInfoComponent, ErrorInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
