import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthHttp} from 'angular2-jwt';
import {Message} from '../interface/Message';
import {apiRoot} from './common';

@Injectable()
export class MessageService {

  constructor(private httpClient: AuthHttp) { }
  addMessage(message: Message) {
    return this.httpClient.post(`${apiRoot}/api/messages/add`, JSON.stringify(message));
  }
  getMessages(fromUserId, toUserId) {
    return this.httpClient.get(`${apiRoot}/api/messages/${fromUserId}/${toUserId}`);
  }
}
