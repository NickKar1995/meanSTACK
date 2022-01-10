import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);
  }
}
