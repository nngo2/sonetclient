import { Component, OnInit } from '@angular/core';
import { IPost, PostActions, IAppState, IPostAppState } from '../../store';
import { Observable } from 'rxjs/Observable';
import { PostService } from '../../services';
import { select, NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {
  // @select(['posts', 'recentPosts']) posts$: Observable<IPost[]>;
  posts$: Observable<IPost[]>;

  constructor(private postService: PostService, private postActions: PostActions, private ngRedux: NgRedux<any>) { }

  ngOnInit() {
    this.posts$ = this.ngRedux.select(['posts', 'recentPosts']);
    // this.postService.getRecentPosts(0).subscribe(
    //   data => {
    //     try {
    //       // console.dir(data.json());
    //       this.postActions.recentPostsAction(data.json());
    //     } catch (error) {
    //       // no data ignore err
    //     }
    //   },
    //   err => {
    //     // Observable.throw(err);
    //     console.log(err);
    //   }
    // );
  }
}
