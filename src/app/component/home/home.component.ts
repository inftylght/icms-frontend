import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showArticleList;

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    const articleList = this.articleService.list({limit: 3}).then(data => {
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

}
