import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor() {}
  enteredTitle = '';
  enteredContent = '';

  ngOnInit(): void {}

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
  }
}
