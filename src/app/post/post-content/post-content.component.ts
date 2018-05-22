import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IPost, PostActions } from '../../store';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { PostService, StateService } from '../../services';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit, OnDestroy {
  @Input('post') post: IPost;
  // @select(s => s.posts.recentPosts.comments) comments$: Observable<any[]>;
  comments: any[];

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

  constructor(private postService: PostService, private postActions: PostActions, private stateService: StateService) { }

  ngOnInit() {
    this.comments = this.post.comments;
    this.stateService.onCommentsChanged.subscribe(
      data => this.comments = data.comments
    );
  }

  ngOnDestroy(): void {
    // this.stateService.onCommentsChanged.unsubscribe();
  }

  // refreshComments() {
  //   this.postService.getPostComments(this.post._id).subscribe(
  //     data => {
  //       try {
  //         if (data.json()) {
  //           console.dir(data.json());
  //           this.comments = data.json().comments;
  //         }
  //         // this.postActions.postCommentsAction(data.json());
  //       } catch (err) {
  //         // no data
  //       }
  //     },
  //     err => {
  //       Observable.throw(err);
  //     }
  //   );
  // }
}
