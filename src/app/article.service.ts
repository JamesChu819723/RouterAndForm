import { Injectable } from '@angular/core';

import { Article } from './model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly articles: Article[] = [
    { id: 1, title: 'test1', author: 'James', createdDate: new Date(2019, 9, 1),
    paragraphs: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quibusdam veniam, obcaecati delectus magni nihil nesciunt eos odit!
      Voluptatum consequatur ullam itaque ipsum fugit libero delectus,
      dolorem illum minima ipsam numquam mollitia esse vero impedit pariatur
      aspernatur, cumque veniam!
      `,
      `Perspiciatis nisi, nesciunt dignissimos commodi corporis nam maxime doloribus,
       debitis explicabo ab atque. Quasi temporibus asperiores totam? Enim culpa iusto
        ab accusantium. Magnam iste similique alias laudantium consequuntur enim
        consequatur a eligendi nisi, harum asperiores sit veniam beatae!
      `,

    ]},
    { id: 2, title: 'test2', author: 'James', createdDate: new Date(2019, 9, 2),
    paragraphs: [
      `Sequi temporibus nostrum quae dolore labore ab dolorum,
      architecto mollitia soluta odio alias! Quidem consequatur
       optio, porro impedit eligendi aut iure unde voluptates, error nobis,`,
      `beatae quam officia? Repellendus expedita animi labore. Eveniet alias
         eos inventore placeat! Voluptates.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime
       voluptatum, molestiae ullam dolores id, obcaecati quibusdam blanditiis,
       rem dignissimos provident cumque quaerat sed temporibus placeat quam nemo.`,
      `Laborum cumque explicabo dolore fugiat sint totam perferendis doloremque
       distinctio dolorem quia laboriosam quos unde saepe, aliquid error reprehenderit,
        tempora nam hic. Debitis, harum. Quibusdam, deleniti quos. Sapiente.
      `
    ]},
  ];

  constructor() { }

  get Articles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article {
    return this.Articles.find(a => a.id === id);
  }

  addArticle(article: Article) {
    const newArticle = Object.assign(article) as Article;
    newArticle.id = this.articles[this.articles.length - 1].id + 1;
    newArticle.createdDate = new Date();
    this.articles.push(newArticle);
  }
}
