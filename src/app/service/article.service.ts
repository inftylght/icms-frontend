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
    const articleList = [
      {
        id: 1,
        title: "หัวข้อ 1",
        content: [
        ]
      },
      {
        id: 2,
        title: "หัวข้อ 2",
        content: [

        ]
      },
      {
        id: 3,
        title: "หัวข้อ 3",
        content: [

        ]
      }
    ];

    this.get = function(id) {
      return articleList.find((article) => {
        return article.id === id
      })
    };

    this.list = function() {
      return new Promise(function(resolve, reject) {
        http.get(configURL + "/list").subscribe(data=> resolve(data), error=> reject(error))
      });
    }
  }
}
