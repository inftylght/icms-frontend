import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ArticleComponent} from './component/article/article.component';
import {CalculateListComponent} from './component/calculate-list/calculate-list.component';
import {CalculateComponent} from './component/calculate/calculate.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'calculate/list', component: CalculateListComponent},
  {path: 'calculate/:id', component: CalculateComponent}
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
export class AppRoutingModule {
}
