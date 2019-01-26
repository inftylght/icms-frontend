import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private showArticleList;

  constructor(
    private articleService:ArticleService
  )
  { }

  ngOnInit() {
    const articleList = this.articleService.list();
    this.showArticleList = articleList.map((article) => {
      return {
        id: article.id,
        title: article.title,
        content: "การประกอบธุรกิจประกันวินาศภัย”\n" +
          "หมายความว่า การประกอบธุรกิจประกันภัยที่\n" +
          "ให้ความคุ้มครองความเสียหายอย่างใดๆ\n" +
          "บรรดาที่พึงประมาณเป็นเงินได้ ความสูญเสีย\n" +
          "ในสิทธิ ผลประโยชน์ หรือรายได้ และให้\n" +
          "หมายความรวมถึง การประกอบธุรกิจ\n" +
          "ประกันภัยที่ให้ความคุ้มครองการทุพพลภาพ\n" +
          "หรือเสียชีวิตของบุคคลจากอุบัติเหตุ และการ\n" +
          "ประกอบธุรกิจประกันภัยต่อ"
      }
    });
  }

}
