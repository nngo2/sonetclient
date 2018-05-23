import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NgRedux, select } from 'ng2-redux';
import { SocketService } from './services/socket.service';
import { PostService, AuthService } from './services';
import { PostActions, UserActions } from './store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService]
})
export class AppComponent {
  title = 'SoNet';
  keywords = '';
  // @select(['user', 'login']) isLoggedIn$: Observable<boolean>;

  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  constructor(private ngRedux: NgRedux<any>, private postService: PostService, private router: Router,
     private postActions: PostActions, private userActions: UserActions, private authService: AuthService,
      private socketService: SocketService ) { }

  logout() {
    this.userActions.resetUserAction();
    if (this.authService.getCurrentUser()) {
      this.socketService.logoutSocket(this.authService.getCurrentUser()._id);
    }
    this.authService.logout();
    this.userActions.loginUserAction(false);
    this.router.navigate(['login']);
  }

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
            // Observable.throw(err);
            console.log(err);
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
            // Observable.throw(err);
            console.log(err);
          }
        );
      }
    }
  }
}
