import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private showArticleList;

  constructor(
    private articleService:ArticleService
  )
  { }

  ngOnInit() {
    const articleList = this.articleService.list();
    this.showArticleList = articleList.map((article) => {
      return {
        id: article.id,
        title: article.title,
        content: article.content
      }
    });
  }

}
