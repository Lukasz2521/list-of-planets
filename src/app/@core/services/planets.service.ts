import { Api } from './../data/api';
import { Planet } from './../data/planet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, zip,  } from 'rxjs';
import { map, expand, mergeAll, share, concatAll, zipAll, combineAll } from 'rxjs/operators';

const API_URL = 'https://swapi.co/api/planets/';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private client: HttpClient) { }

  get() {
    return this.getData(API_URL).pipe(
      expand<Api>((apiData) => {
        return apiData.next != null ? this.getData(apiData.next) : [];
      }),
    );
  }

  private getData(url): Observable<Api> {
    return this.client.get<Api>(url);
  }
}