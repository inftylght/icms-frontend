import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    ZeroPaddingPipe,
    CalculateListComponent
  ],
  imports: [
    NgxWebstorageModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
