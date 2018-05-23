import { Injectable } from '@angular/core';
import { IPost, PostActions } from '../store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';

@Injectable()
export class PostsResolver implements Resolve<IPost[]> {
  constructor(private postService: PostService, private postActions: PostActions) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.postService.getRecentPosts(0).pipe(
      map(data => {
        try {
          this.postActions.recentPostsAction(data.json());
          return data.json();
        } catch (error) {
          console.log(error);
          return [];
        }
      })
    );
  }
}
