import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleList;

  public get;
  public list;

  constructor(private http: HttpClient) {
    const configURL = environment.apiURL + '/article';

    this.get = function(id) {
      return new Promise(function(resolve, reject) {
        http.get(`${configURL}/${id}`).subscribe(data => resolve(data), error => reject(error))
      })
    };

    this.list = function(query) {
      return new Promise(function(resolve, reject) {
        http.get(configURL + "/list", {params: query}).subscribe(data=> resolve(data), error=> reject(error))
      });
    }
  }
}
