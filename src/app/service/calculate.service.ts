import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  private configURL = environment.apiURL + '/calculate';

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(`${this.configURL}/list`).toPromise();
  }
}
