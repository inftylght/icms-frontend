import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeTH from '@angular/common/locales/th';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ArticleComponent } from './component/article/article.component';

import { ArticleListComponent } from './component/article-list/article-list.component';
import { ZeroPaddingPipe } from './pipe/zero-padding.pipe';
import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { CalculateListComponent } from './component/calculate-list/calculate-list.component';
import { CalculateComponent } from './component/calculate/calculate.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeTH)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    ZeroPaddingPipe,
    CalculateListComponent,
    CalculateComponent
  ],
  imports: [
    NgxWebstorageModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
