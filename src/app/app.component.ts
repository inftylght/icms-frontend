import { Component } from '@angular/core';
import {LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  @LocalStorage('language')
  private langulage;

  onChangeLang(language) {
    this.langulage = language;
  }
}
