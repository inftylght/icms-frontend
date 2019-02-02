import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private showArticleList;

  constructor(private articleService: ArticleService) {
    this.articleService.list().then(data => {
      this.showArticleList = data.map(article => {
        let tmpContent = "";
        for (const content of article.contents) {
          if (content.type==='text') {
            tmpContent += content.content;
          }
        }
        if (tmpContent.length>200) {
          tmpContent = tmpContent.substr(0, 200)+ "...";
        }
        tmpContent = tmpContent.replace(/[#*>]+/g, '');
        return {
          id: article.id,
          title: article.title,
          content: tmpContent
        }
      });
    });
  }

  ngOnInit() {
  }

}
