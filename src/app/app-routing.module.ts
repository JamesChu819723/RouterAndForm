import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { LoginComponent } from './login/login.component';

const childRouteSettings: Route = {
  path: '',
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'article', component: ArticleListComponent },
    { path: 'article/create', component: ArticleCreateComponent },
    { path: 'article/:id', component: ArticleComponent }
  ]
};

const routes: Routes = [
  childRouteSettings,
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
