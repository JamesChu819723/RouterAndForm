import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  // form = new FormGroup(
  //   {
  //     author: new FormControl('james', Validators.required ),
  //     title: new FormControl('A good news', [Validators.required, Validators.minLength(3)]),
  //     paragraphs: new FormArray([
  //       new FormControl('good paragraph 1', Validators.required),
  //       new FormControl('good paragraph 2', Validators.required)
  //     ])
  //   }
  // );
  form = this.fb.group({
    author: ['', Validators.required],
    title: ['', [Validators.required, Validators.minLength(3)]],
    paragraphs: this.fb.array([
      ['', Validators.required],
      ['', Validators.required]
    ])
  });
  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.form.patchValue({ title: 'Hi, title will be replaced'});
    this.form.patchValue( { paragraphs: [ 'only first paragraph be replaced ']});
    // this.form.setValue({
    //   author: 'james',
    //   title: 'A good news',
    //   paragraphs: [
    //     'good paragraph 1',
    //     'good paragraph 2'
    //   ]
    // });

    /* following code goes worng due to arguement pass to setValue must match form model */
    // this.form.setValue({
    //   author: 'james',
    //   title: 'A good news',
    //   paragraphs: [
    //     'good paragraph 1'
    //   ]
    // });
  }

  addArticle() {
    if (this.form.valid) {
      this.articleService.addArticle(this.form.value);
      this.router.navigateByUrl('/article');
    }
  }

  addParagraph() {
    const paragraphs = this.form.get('paragraphs') as FormArray;
    paragraphs.push(this.fb.control('', Validators.required));
  }
}
