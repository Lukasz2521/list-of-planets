import { Planet } from './../data/planet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://swapi.co/api/planets/';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private client: HttpClient) { }

  get(): Observable<Planet[]> {
    return this.client.get<Planet[]>(API_URL);
  }
}
