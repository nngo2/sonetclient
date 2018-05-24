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

  getPostComments(postId) {
    return this.httpClient.get(`${apiRoot}/api/posts/${postId}/comments`);
  }

  createPostComment(postId, comment) {
    return this.httpClient.post(`${apiRoot}/api/posts/${postId}/comments`, JSON.stringify(comment));
  }

  searchPosts(page, keywords) {
    // return this.httpClient.post(`${apiRoot}/api/posts/search/${page}`, JSON.stringify(keywords));
    return this.httpClient.post(`${apiRoot}/api/posts/search/v2/${page}`, JSON.stringify(keywords));
  }

}
