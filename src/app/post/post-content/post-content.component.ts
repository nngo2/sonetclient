import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../store';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  @Input('post') post: IPost;

  get fullName() {
    return this.post.username;
  }

  get postContent() {
    return this.post.content;
  }

  get postTime() {
    return this.post.time;
  }

  constructor() { }

  ngOnInit() {
  }
}
