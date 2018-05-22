import { Component, OnInit, Input } from '@angular/core';
import { IPost, PostActions } from '../../store';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { PostService } from '../../services';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  @Input('post') post: IPost;

  @select(s => s.posts.recentPosts.comments) comments$: Observable<any[]>;

  get fullName() {
    return this.post.username;
  }

  get postContent() {
    return this.post.content;
  }

  get postTime() {
    return this.post.time;
  }

  get postId() {
    return this.post._id;
  }

  constructor(private postService: PostService, private postActions: PostActions) { }

  ngOnInit() {
    this.postService.getPostComments(this.post._id).subscribe(
      data => {
        try {
          console.dir(data.json());
          this.postActions.postCommentsAction(data.json());
        } catch (err) {
          // no data
        }
      },
      err => {
        Observable.throw(err);
      }
    );
  }
}
