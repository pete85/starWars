import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../_models/people';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  readonly ROOT_URL = 'https://swapi.co/api';

  people: Observable<any>;

  constructor(private _http: HttpClient) { }

  getPeople() {
    return this._http.get(this.ROOT_URL + '/people');
  }
}
