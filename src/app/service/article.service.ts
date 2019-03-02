import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private configURL = environment.apiURL + '/article';

  get(id) {
    return this.http.get(`${this.configURL}/${id}`).toPromise();
  }

  list(query = {}) {
    return this.http.get(`${this.configURL}/list`, {params: query}).toPromise();
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
