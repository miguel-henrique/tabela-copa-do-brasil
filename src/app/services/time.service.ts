import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Time } from '../models/Time';




@Injectable({
  providedIn: 'root'
})

export class TimeService {


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {

   }
    
  // Obtem todos os Times
  getTimes(): Observable<Time[]> {
    return this.httpClient.get<Time[]>('https://api.api-futebol.com.br/v1/campeonatos/2/tabela')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do cliente
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
