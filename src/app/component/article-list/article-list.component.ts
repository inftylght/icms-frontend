import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public showArticleList;

  constructor(private articleService: ArticleService) {
    this.articleService.list().then(data => {
      this.showArticleList = data.map(article => {
        return {
          id: article.id,
          title: article.title,
          content: article.text
        }
      });
    });
  }

  ngOnInit() {
  }

}
