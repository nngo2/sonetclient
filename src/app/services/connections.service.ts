import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { apiRoot } from './common';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';
import {ConversationUser} from '../interface/ConversationUser';

@Injectable()
export class ConnectionsService {

  constructor(private httpClient: AuthHttp, private noJwtClient: HttpClient) { }
  findUsers(searchStr, first, limit) {
    const params  = new HttpParams({fromObject: {
        searchStr: searchStr,
        first: first,
        limit: limit
    }});
    return this.httpClient.get(`${apiRoot}/api/users/findUsers`, {params: params});
  }

  addFriend(userId: string, friendId: string) {
    const params  = new HttpParams({fromObject: {
      userId: userId,
      friendId: friendId
    }});
    return this.httpClient.get(`${apiRoot}/api/users/addFriend`, {params: params});
  }

  getFriendList(userId) {
    return this.httpClient.get(`${apiRoot}/api/users/friends/${userId}`);
  }
}
