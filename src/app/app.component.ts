import {Component, OnInit} from '@angular/core';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {Local} from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  @LocalStorage('language')
  private langulage;

  @LocalStorage('currentPage')
  public currentPage;

  public title;
  public titleDescription;
  public article;
  public calculate;

  changeTitleByLang(language) {
    if (language === 'EN') {
      this.title = 'Non-life insurance library';
      this.titleDescription = 'Curious about insurance? you can learn here.';
      this.article = 'Articl';
      this.calculate = 'Calculate';
    } else {
      this.title = 'ห้องสมุดประกันวินาศภัย';
      this.titleDescription = 'อยากรู้เกี่ยวกับประกันสามารถเรียนรู้ได้ที่นี่';
      this.article = 'บทความ';
      this.calculate = 'คำนวน';
    }
  }

  onChangeLang(language) {
    this.langulage = language;
    this.changeTitleByLang(this.langulage);
  }

  ngOnInit(): void {

    this.localStorageService.observe('currentPage')
      .subscribe((currentPage) => {
        this.currentPage = currentPage;
      });

    this.changeTitleByLang(this.langulage);
  }
}
