import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPreguntaPageRoutingModule } from './ver-pregunta-routing.module';

import { VerPreguntaPage } from './ver-pregunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPreguntaPageRoutingModule
  ],
  declarations: [VerPreguntaPage]
})
export class VerPreguntaPageModule {}
