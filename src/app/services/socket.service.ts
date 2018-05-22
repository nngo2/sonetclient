import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {
  private BASE_URL = 'http://localhost:3000/';
  private socket: SocketIOClient.Socket;
  constructor() {
  }
  initSocket(userId) {
    this.socket = io(this.BASE_URL , { query: `userId=${userId}` });
  }

  sendMessage(message: string): void {
    this.socket.emit('add-message', message);
  }
  receiveMessages(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('add-message-response', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}
