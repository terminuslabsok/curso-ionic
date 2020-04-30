import { Injectable } from '@angular/core';
import { IPregunta } from '../models/app.model';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(
    private apiService: BaseApiService
  ) { }


  getPreguntas(): Observable<IPregunta[]> {
    return this.apiService.get('/preguntas');
  }

  addPregunta( p: IPregunta): Observable<IPregunta> {
    return this.apiService.post('/preguntas', p);
  }

  getPregunta(id: number): Observable<IPregunta> {
    return this.apiService.get(`/preguntas/${id}`);
  }

 
}
