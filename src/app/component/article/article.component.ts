import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private routerSubscription;
  private articleId;
  public text;
  public title;

  private article;

  @LocalStorage('language')
  private language;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.text = '';
    this.localStorageService.observe('language')
      .subscribe((language) => {
        setArticleByLanguage(language);
      });

    const setArticleByLanguage = (language) => {
      if (language === 'EN') {
        this.title = this.article.titleEN;
        this.text = this.article.textEN;
      } else {
        this.title = this.article.title;
        this.text = this.article.text;
      }
    };

    this.routerSubscription = this.route.params.subscribe((param) => {
      this.articleId = param['id'];
      this.articleService.get(this.articleId)
        .then(data => {
          this.article = data;
          setArticleByLanguage(this.language);
        });
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
