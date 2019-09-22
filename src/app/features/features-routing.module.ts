import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleCreateComponent } from '../article-create/article-create.component';
import { ArticleComponent } from '../article/article.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleListComponent },
  { path: 'article/create', component: ArticleCreateComponent },
  { path: 'article/:id', component: ArticleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
