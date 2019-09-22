import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(public articleService: ArticleService, private router: Router) { }

  ngOnInit() {
  }

  navigateToArticle(id: number) {
    this.router.navigate(['/article', id, { matrixParam: 'matrixParam' } ], { queryParams: { queryString: 'queryString'}});
    // this.router.navigateByUrl(`/article/${id}`);
  }

}
