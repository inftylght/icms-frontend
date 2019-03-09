import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configURL = environment.apiURL + '/config';

  constructor(
    private http: HttpClient
  ) { }

  getConfigMap() {
    return this.http.get(`${this.configURL}/configMap`).toPromise();
  }
}
