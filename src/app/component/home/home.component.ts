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
    const articleList = this.articleService.list().then(data=> {
      console.log("DATA:", data)
    });
    this.showArticleList = [{id:1, tiele:"หัวข้อ1"}, {id:2, title:"หัวข้อ2"}, {id:3, title:"หัวข้อ3"}].map((article) => {
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
