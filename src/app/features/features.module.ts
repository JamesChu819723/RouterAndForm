import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from '../home/home.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';
import { ArticleCreateComponent } from '../article-create/article-create.component';
import { ArticleService } from '../article.service';


@NgModule({
  declarations: [
    HomeComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticleCreateComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ ArticleService ],
  exports: [
  ]
})
export class FeaturesModule { }
