import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPreguntaPage } from './ver-pregunta.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VerPreguntaPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class VerPreguntaPageRoutingModule {}
