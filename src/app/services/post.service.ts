import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { apiRoot } from './common';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: AuthHttp) { }

  createContentPost(content) {
    return this.httpClient.post(`${apiRoot}/api/posts`, JSON.stringify(content));
  }

  getRecentPosts(page) {
    return this.httpClient.get(`${apiRoot}/api/posts/recent/${page}`);
  }

}
