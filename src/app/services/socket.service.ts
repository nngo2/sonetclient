import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {Message} from '../interface/Message';

@Injectable()
export class SocketService {
  private BASE_URL = 'http://localhost:3000/';
  private socket: SocketIOClient.Socket;
  private currentUserId: string;
  constructor() {
  }
  initSocket(userId) {
    this.currentUserId = userId;
    this.socket = io(this.BASE_URL , { query: `userId=${userId}` });
  }

  sendMessage(message: Message): void {
    message.fromUserId = this.currentUserId;
    this.socket.emit('add-message', message);
  }
  receiveMessages(): Observable<Message> {
    return new Observable(observer => {
      this.socket.on('add-message-response', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }

  logoutSocket(userId) {
    this.socket.emit('logout', {userId: userId});
  }
}
