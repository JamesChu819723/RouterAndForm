import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    // use snapshot to get router parameter should make sure router parameter never change;
    // this.article = this.articleService.getArticle(+this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(map => this.article = this.articleService.getArticle(+map.get('id')));

    // demo get required parameter in url segement
    console.log('id in snapshot: ' + this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(map => console.log('id:' + map.get('id')));

    // demo how to get matrix parameter in component
    console.log('matrixParam in snapshot: ' + this.route.snapshot.url[1].parameters.matrixParam);
    this.route.url.subscribe(url => console.log('matrixParam: ' + url[1].parameters.matrixParam));

    // demo how to get query string in component
    console.log('queryString in snarpshot: ' + this.route.snapshot.queryParamMap.get('queryString'));
    this.route.queryParams.subscribe(queryMap => console.log('queryString: ' + queryMap.queryString));
  }

  get nextArticleId() {
    const next = this.articleService.Articles.find(a => a.id > this.article.id);
    return next ? next.id : null;
  }
}
