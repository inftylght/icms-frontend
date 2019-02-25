import {Component, OnInit} from '@angular/core';
import {LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  @LocalStorage('language')
  private langulage;

  public title;
  public titleDescription;

  changeTitleByLang(language) {
    if (language === 'EN') {
      this.title = 'Non-life insurance library';
      this.titleDescription = 'Curious about insurance? you can learn here.';
    } else {
      this.title = 'ห้องสมุดประกันวินาศภัย';
      this.titleDescription = 'อยากรู้เกี่ยวกับประกันสามารถเรียนรู้ได้ที่นี่';
    }
  }

  onChangeLang(language) {
    this.langulage = language;
    this.changeTitleByLang(this.langulage);
  }

  ngOnInit(): void {
    this.changeTitleByLang(this.langulage);
  }
}
