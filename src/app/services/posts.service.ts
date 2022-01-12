import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../components/posts/post.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor() {}

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    // console.log('subject', this.postsUpdated.asObservable());
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}