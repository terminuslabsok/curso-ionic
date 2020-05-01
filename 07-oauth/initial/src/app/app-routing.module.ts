import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'preguntar',
    loadChildren: () => import('./pages/preguntar/preguntar.module').then( m => m.PreguntarPageModule)
  },
  {
    path: 'pregunta/:id',
    loadChildren: () => import('./pages/ver-pregunta/ver-pregunta.module').then( m => m.VerPreguntaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
