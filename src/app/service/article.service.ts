import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleList;
  public get;
  public list;

  constructor() {
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
      console.log(articleList);
      return articleList;
    }
  }
}
