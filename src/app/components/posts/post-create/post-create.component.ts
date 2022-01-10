import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../post.model';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {}

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.postCreated.emit(post);
  }
}
