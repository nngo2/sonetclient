import { Component, OnInit, Input } from '@angular/core';
import { PostActions, IUser } from '../store';
import { AuthService, PostService, StateService } from '../services';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-add-comment',
  template: `
  <div class="card text-dark bg-light mb-3">
    <div class="card-body">
      <form class="container" (ngSubmit)="f.form.valid && send(f)" #f="ngForm" novalidate>
        <div class="form-row">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Comment: </span>
            </div>
            <textarea class="form-control" name="content" [(ngModel)]="content" #contentRef="ngModel" required></textarea>
            <div class="input-group-append">
              <button [disabled]="f.form.invalid" class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  `,
  styles: []
})
export class AddCommentComponent implements OnInit {
  @Input() postId: string;
  content: string;

  constructor(private authService: AuthService, private postService: PostService,
    private postActions: PostActions, private stateService: StateService) { }

  ngOnInit() {
    this.content = '';
  }

  send(f) {
    const user: IUser = this.authService.getCurrentUser();
    const post: any = {
      username: user.login,
      time: new Date(),
      content: this.content
    };

    if (f.valid) {
      console.dir(f.value);
      this.postService.createPostComment(this.postId, post).subscribe(
        data => {
          try {
            console.dir(data.json());
            this.content = '';
            this.refreshData();
          } catch (error) {
            // no data ignore
          }
        },
        err => {
          Observable.throw(err);
        }
      );
    }
  }

  refreshData() {
    this.postService.getPostComments(this.postId).subscribe(
      data => {
        try {
          if (data.json()) {
            console.dir(data.json());
            // this.postActions.postCommentsAction(data.json());
            this.stateService.raiseOnCommentsChanged(data.json());
          }
        } catch (error) {
          // no data ignore
        }
      },
      err => {
        Observable.throw(err);
      }
    );
  }

}
