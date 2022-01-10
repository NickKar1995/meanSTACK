import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../post.model';
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
  @Output() postCreated = new EventEmitter<Post>();

  //
  postForm!: FormGroup;
  //

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
    });
  }

  onAddPost() {
    console.log('FORM HERE', this.postForm);
    const post: Post = {
      // title: this.enteredTitle,
      // content: this.enteredContent,
      title: this.postForm.value.title,
      content: this.postForm.value.content,
    };
    this.postCreated.emit(post);
  }
}
