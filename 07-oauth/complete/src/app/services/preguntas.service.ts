import { Injectable } from '@angular/core';
import { IPregunta } from '../models/app.model';
import { BaseApiService } from './base-api.service';
import { Plugins } from '@capacitor/core';
import { catchError, map, switchMap} from 'rxjs/operators';
import { throwError, from, Observable} from 'rxjs';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(
    private apiService: BaseApiService
  ) { }


  getPreguntas(): Observable<IPregunta[]> {
    return this.apiService.get('/preguntas')
    .pipe(
      switchMap( res => this.savePreguntasInStorage(res)),
      catchError(error => this.getPreguntasFromStorage())
    );
  }

  addPregunta( p: IPregunta): Observable<IPregunta> {
    return this.apiService.post('/preguntas', p);
  }

  getPregunta(id: number): Observable<IPregunta> {
    return this.apiService.get(`/preguntas/${id}`)
    .pipe(
      catchError(error => {
        return this.getPreguntasFromStorage().pipe(
          map(res => {
            for (const p of res) {
              if (p.id === id) {
                return p;
              }
            }
            return throwError(error);
          })
        );
      })
    );
  }



  private savePreguntasInStorage(obj): Observable<IPregunta[]>  {
    return from (Storage.set({ key: 'preguntas', value: JSON.stringify(obj)}))
      .pipe(
        map(res => obj)
      );
  }

  private getPreguntasFromStorage(): Observable<IPregunta[]> {
    return from (Storage.get({ key: 'preguntas' }))
    .pipe(
      map(res => JSON.parse(res.value))
    );
  }

}
