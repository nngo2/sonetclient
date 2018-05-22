import { Component, OnInit } from '@angular/core';
import { IPost, IUser } from '../../store';
import { AuthService, PostService } from '../../services';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  content: string;

  constructor(private authService: AuthService, private postService: PostService) { }

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
      this.postService.createContentPost(post).subscribe(
        data => {
          console.dir(data);
          this.content = '';
        },
        err => {
          Observable.throw(err);
        }
      );
    }
  }
}
