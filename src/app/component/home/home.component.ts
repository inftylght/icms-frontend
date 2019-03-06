import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  public rainbowColorStyle;
  @LocalStorage('currentPage')
  public currentPage;

  private articleList;

  @LocalStorage('language')
  private language;

  constructor(
    private articleService: ArticleService,
    private localStorageService: LocalStorageService
  ) {
    this.currentPage = 'article';
  }

  ngOnInit() {
    this.rainbowColorStyle = [
      {'background-color:': 'box-rainbow-red'},
      {'background-color:': 'box-rainbow-orange'},
      {'background-color:': 'box-rainbow-yellow'},
      {'background-color:': 'box-rainbow-green'},
      {'background-color:': 'box-rainbow-indigo'},
      {'background-color:': 'box-rainbow-sky'},
      {'background-color:': 'box-rainbow-blue'},
      {'background-color:': 'box-rainbow-violet'}
    ];
    this.localStorageService.observe('language')
      .subscribe((language) => {
        showArticleByLanguage(language);
      });

    this.articleService.list().then(data => {
      this.articleList = data;
      showArticleByLanguage(this.language);
    });

    const showArticleByLanguage = (lang) => {
      if (lang === 'EN') {
        this.articleText = 'Article';
        this.showArticleList = this.articleList.map(article => {
          return {
            id: article.id,
            title: article.titleEN,
            content: article.textEN
          };
        });
      } else {
        this.articleText = 'บทความ';
        this.showArticleList = this.articleList.map(article => {
          return {
            id: article.id,
            title: article.title,
            content: article.text
          };
        });
      }
    };
  }

}
