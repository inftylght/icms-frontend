import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private routerSubscription;
  private articleId;
  public contents;
  public title;

  constructor(private route:ActivatedRoute,
              private articleService:ArticleService) {}

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe((param) => {
      this.articleId = param['id'];
      console.log('articleId=', this.articleId);
      this.articleService.get(this.articleId)
        .then(data => {
          console.log(data)
          this.title = data.title;
          this.contents = data.contents;
          console.log( this.contents);
        })

    })
  }
 
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
