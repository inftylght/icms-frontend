import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private routerSubscription;
  private articleId;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe((param) => {
      this.articleId = param['id'];
      console.log('articleId=', this.articleId)
    })
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
