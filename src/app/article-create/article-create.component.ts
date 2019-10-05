import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    author: ['james', Validators.required],
    title: ['A good news', [Validators.minLength(3)]],
    paragraphs: this.fb.array([
      ['good paragraph 1', Validators.required],
      ['good paragraph 2', Validators.required]
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
