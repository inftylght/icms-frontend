import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {CalculateService} from '../../service/calculate.service';
import {formatCurrency} from '@angular/common';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  public calculateId;
  public calculate;
  public title;
  public resultTxt;
  public fomula;
  public currentFormIndex;
  public forms;
  public result;

  @LocalStorage('language')
  private language;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router,
    private calculateService: CalculateService,
    @Inject(LOCALE_ID) public locale: string
  ) {
  }

  ngOnInit() {
    this.localStorageService.observe('language')
      .subscribe((language) => {
        this.setCalculateByLanguage(language);
      });

    this.route.params.subscribe((param) => {
      this.calculateId = param['id'];
      this.calculateService.get(this.calculateId)
        .then(data => {
          this.calculate = data;
          this.setCalculateByLanguage(this.language);
        });
    });
  }

  setCalculateByLanguage(lang) {
    if (lang === 'EN') {
      this.title = this.calculate.nameEN;
      this.resultTxt = 'Result';
      this.forms = this.calculate.forms.map(form => {
        const tmpForm = {
          name: form.nameEN,
          type: form.type,
          value: null,
          selectionList: []
        };
        if (form.type === 'Selection') {
          const configs = JSON.parse(form.config);
          tmpForm.selectionList = configs.map(config => {
            return {
              name: config.nameEN,
              value: config.value
            };
          });
        }
        return tmpForm;
      });
    } else {
      this.title = this.calculate.name;
      this.resultTxt = 'ผลลัพธ์';
      this.forms = this.calculate.forms.map(form => {
        const tmpForm = {
          name: form.name,
          type: form.type,
          value: null,
          selectionList: []
        };
        if (form.type === 'Selection') {
          const configs = JSON.parse(form.config);
          tmpForm.selectionList = configs.map(config => {
            return {
              name: config.name,
              value: config.value
            };
          });
        }
        return tmpForm;
      });
    }
    this.result = null;
    this.currentFormIndex = 0;
    this.fomula = this.calculate.formula;
  }

  goBack() {
    this.currentFormIndex -= 1;
  }

  next() {
    this.currentFormIndex += 1;
  }

  summary() {
    const v = this.forms.map(form => {
      let value = 0;
      try {
        value = Number(form.value);
      } catch (error) {
        console.error(error);
      }
      return value;
    });
    const result = eval(this.fomula);
    this.result = formatCurrency(result, 'th_TH', '');
  }
}
