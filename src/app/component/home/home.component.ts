import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigService} from '../../service/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showArticleList;
  public articleText;
  public rainbowColorStyle;
  public youtube;

  private articleList;

  @LocalStorage('language')
  private language;

  constructor(
    private articleService: ArticleService,
    private localStorageService: LocalStorageService,
    private domSantization: DomSanitizer,
    private configSerivce: ConfigService
  ) {
  }

  async getConfig() {
    const config = await this.configSerivce.getConfigMap();

    const youtubeToke = config['HOME.YOUTUBE.TOKEN'];
    if (youtubeToke) {
      const origin = window.location.origin;
      this.youtube = this.domSantization.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${youtubeToke}?autoplay=0&origin=${origin}`);
    }
  }

  ngOnInit() {

    this.getConfig();

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
