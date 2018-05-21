import { Component, OnInit } from '@angular/core';
import { IPost } from '../../store';
import { Observable } from 'rxjs/internal/Observable';
import { PostService } from '../../services';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {
  posts: Observable<IPost[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getRecentPosts(0).subscribe(
      data => {
        console.dir(data.json());
        this.posts = data.json();
      },
      err => {
        Observable.throw(err);
      }
    );
  }

}
