import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { apiRoot } from './common';
import {AuthHttp} from 'angular2-jwt';
import {ConversationUser} from '../interface/ConversationUser';
import {RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class ConnectionsService {

  constructor(private httpClient: AuthHttp, private noJwtClient: HttpClient) { }
  findUsers(searchStrParam, firstParam, limitParam) {
    const params = new URLSearchParams();
    params.set('searchStr', searchStrParam);
    params.set('first', firstParam);
    params.set('limit', limitParam);
    const  requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.httpClient.get(`${apiRoot}/api/users/findUsers`, requestOptions);
  }

  addFriend(userId: string, friendId: string) {
    const params = new URLSearchParams();
    params.set('userId', userId);
    params.set('friendId', friendId);
    const  requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.httpClient.get(`${apiRoot}/api/users/addFriend`, requestOptions);
  }

  getFriendList(userId) {
    return this.httpClient.get(`${apiRoot}/api/users/friends/${userId}`);
  }
}
