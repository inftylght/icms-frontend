import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ArticleComponent} from "./component/article/article.component";

const routes = [
  {path: '',  component: HomeComponent},
  {path: 'article/:id', component: ArticleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
