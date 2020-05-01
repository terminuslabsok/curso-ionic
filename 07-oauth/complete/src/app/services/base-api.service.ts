import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, throttle } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { MensajeError } from '../models/app.model';


@Injectable({
    providedIn: 'root'
})
export class BaseApiService {

    constructor(
        private http: HttpClient,
    ) { }

    private setHeaders() {
        return {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        };
    }


    private formatErrors(error: any) {
        console.error('error al llamar servicio', error);
        const errores: MensajeError[] = [];
        if (error) {
            if (error.status === 400) {
                return throwError(error.error);

            } else if (error.status === 500) {
                errores.push({ codigo: 'DESCONOCIDO', mensaje: 'Algo salió mal, vuelve a intentarlo más tarde.' });
                return throwError(errores);

            } else if (error.status === 401) {
                errores.push({ codigo: 'ACCESO_NO_AUTORIZADO', mensaje: 'Error inesperado, acceso no autorizado.' });
                return throwError(errores);

            }
        }
        errores.push({ codigo: 'DESCONOCIDO', mensaje: 'Error inesperado, verifique su conexión a internet.' });
        return throwError(errores);
    }



    get(path: string, myParams: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.baseUrl}${path}`, { headers: this.setHeaders(), params: myParams }).pipe(
            catchError(error => this.formatErrors(error))
        );
    }




    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.baseUrl}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        ).pipe(
            catchError(error => this.formatErrors(error))
        );
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${environment.baseUrl}${path}`,
            { headers: this.setHeaders() }
        ).pipe(
            catchError(error => this.formatErrors(error))
        );
    }


}
