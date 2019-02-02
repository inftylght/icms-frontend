import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ArticleComponent } from './component/article/article.component';
import {HttpClientModule} from "@angular/common/http";
import {MarkdownModule} from "ngx-markdown";
import { ArticleListComponent } from './component/article-list/article-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
