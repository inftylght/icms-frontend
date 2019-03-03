import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {DomSanitizer} from '@angular/platform-browser';

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
  public youtube;

  private article;

  @LocalStorage('language')
  private language;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private localStorageService: LocalStorageService,
              private router: Router,
              private domSantization: DomSanitizer
  ) {}

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
      if (this.article.youtube) {
        const origin = window.location.origin
        this.youtube = this.domSantization.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${this.article.youtube}?autoplay=0&origin=${origin}`);

        console.log('youtube', this.youtube);
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
