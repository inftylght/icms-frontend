import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public showArticleList;
  private articleList;

  @LocalStorage('language')
  private language;

  constructor(
    private articleService: ArticleService,
    private localStorageService: LocalStorageService
  ) {
    localStorageService.observe('language')
      .subscribe((language) => {
        showArticleByLanguage(language);
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

  ngOnInit() {
  }

}
