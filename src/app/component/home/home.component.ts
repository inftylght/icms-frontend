import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showArticleList;
  private articleList;
  private language;

  constructor(
    private articleService: ArticleService,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.localStorageService.observe('language')
      .subscribe((language) => {
        this.language = language;
        showArticleByLanguage(this.language);
      });

    this.articleService.list().then(data => {
      this.articleList = data;
      showArticleByLanguage(this.language);
    });

    const showArticleByLanguage = (lang) => {
      console.log(lang);
      this.showArticleList = this.articleList.map(article => {
        if (lang === 'TH') {
          return {
            id: article.id,
            title: article.title,
            content: article.text
          };
        } else {
          return {
            id: article.id,
            title: article.titleEN,
            content: article.textEN
          };
        }
      });
    };
  }

}
