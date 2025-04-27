import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ativo } from '../models/ativo.model';

@Injectable({
  providedIn: 'root',
})
export class AtivoService {

  constructor(private httpClient: HttpClient) {

  }

  public get(): Observable<Array<Ativo>> {
    return this.httpClient.get<Array<Ativo>>("url"); //TODO: desenvolver o endpoint
  }
}
