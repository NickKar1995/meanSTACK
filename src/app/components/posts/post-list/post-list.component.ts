import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: any = [
    // { title: 'First Post', content: 'This is first Post' },
    // { title: 'Second Post', content: 'This is Second Post' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
