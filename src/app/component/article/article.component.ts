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
  public text;
  public title;

  constructor(private route:ActivatedRoute,
              private articleService:ArticleService) {}

  ngOnInit() {
    this.text="";
    this.routerSubscription = this.route.params.subscribe((param) => {
      this.articleId = param['id'];
      this.articleService.get(this.articleId)
        .then(data => {
          this.title = data.title;
          this.text = data.text;
        })

    })
  }
 
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
