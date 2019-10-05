import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  form = new FormGroup(
    {
      author: new FormControl('', Validators.required ),
      title: new FormControl('', Validators.required),
      paragraphs: new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required)
      ])
    }
  );
  constructor() { }

  ngOnInit() {
  }

}
