import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showArticleList;
  public articleText;
  private articleList;

  @LocalStorage('language')
  private language;

  constructor(
    private articleService: ArticleService,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.localStorageService.observe('language')
      .subscribe((language) => {
        showArticleByLanguage(language);
      });

    this.articleService.list().then(data => {
      this.articleList = data;
      showArticleByLanguage(this.language);
    });

    const showArticleByLanguage = (lang) => {
      if (lang === 'TH') {
        this.articleText = 'บทความ';
        this.showArticleList = this.articleList.map(article => {
          return {
            id: article.id,
            title: article.title,
            content: article.text
          };
        });
      } else {
        this.articleText = 'Article';
        this.showArticleList = this.articleList.map(article => {
          return {
            id: article.id,
            title: article.titleEN,
            content: article.textEN
          };
        });
      }
    };
  }

}
