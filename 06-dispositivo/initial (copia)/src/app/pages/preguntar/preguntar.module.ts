import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntarPageRoutingModule } from './preguntar-routing.module';

import { PreguntarPage } from './preguntar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreguntarPageRoutingModule,
    SharedModule
  ],
  declarations: [PreguntarPage]
})
export class PreguntarPageModule {}
