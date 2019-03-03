import {Component, OnInit} from '@angular/core';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {CalculateService} from '../../service/calculate.service';

@Component({
  selector: 'app-calculate-list',
  templateUrl: './calculate-list.component.html',
  styleUrls: ['./calculate-list.component.css']
})
export class CalculateListComponent implements OnInit {

  public calculateText;
  public showCalculateList;
  private calculateList;

  @LocalStorage('language')
  private language;

  private showCalculateByLanguage(lang) {
    if (lang === 'EN') {
      this.calculateText = 'Calculate';
      this.showCalculateList = this.calculateList.map((calculate) => {
        console.log(calculate);
        return {
          id: calculate.id,
          name: calculate.nameEN
        };
      });
    } else {
      this.calculateText = 'คำนวน';
      this.showCalculateList = this.calculateList.map((calculate) => {
        console.log(calculate);
        return {
          id: calculate.id,
          name: calculate.name
        };
      });
    }
  }

  constructor(
    private localStorageService: LocalStorageService,
    private calculateService: CalculateService
  ) {
  }

  ngOnInit() {
    this.localStorageService.observe('language')
      .subscribe((language) => {
        this.showCalculateByLanguage(language);
      });

    this.calculateService.list().then(data => {
      this.calculateList = data;
      this.showCalculateByLanguage(this.language);
    });
  }

}
