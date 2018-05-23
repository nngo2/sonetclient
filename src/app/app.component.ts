import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NgRedux, select } from 'ng2-redux';
import { SocketService } from './services/socket.service';
import { PostService } from './services';
import { PostActions } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService]
})
export class AppComponent {
  title = 'SoNet';
  keywords = '';
  @select(s => s.user.login) isLoggedIn$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<any>, private postService: PostService, private postActions: PostActions) { }

  onSubmit(f) {
    if (f.valid) {
      if (this.keywords !== '*') {
        this.postService.searchPosts(0, { keywords: this.keywords }).subscribe(
          data => {
            try {
              // console.dir(data.json());
              this.postActions.recentPostsAction(data.json());
            } catch (error) {
              // no data ignore err
            }
          },
          err => {
            Observable.throw(err);
          }
        );
      } else {
        this.postService.getRecentPosts(0).subscribe(
          data => {
            try {
              // console.dir(data.json());
              this.postActions.recentPostsAction(data.json());
            } catch (error) {
              // no data ignore err
            }
          },
          err => {
            Observable.throw(err);
          }
        );
      }
    }
  }
}
