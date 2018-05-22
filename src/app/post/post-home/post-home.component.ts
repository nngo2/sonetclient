import { Component, OnInit } from '@angular/core';
import { IPost, PostActions, IAppState, IPostAppState } from '../../store';
import { Observable } from 'rxjs/internal/Observable';
import { PostService } from '../../services';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {
  @select(s => s.posts.recentPosts) posts$: Observable<IPost[]>;

  constructor(private postService: PostService, private postActions: PostActions) { }

  ngOnInit() {
    this.postService.getRecentPosts(0).subscribe(
      data => {
        console.dir(data.json());
        this.postActions.recentPostsAction(data.json());
      },
      err => {
        Observable.throw(err);
      }
    );
  }
}
