import {Component, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../services/socket.service';
import {StateService} from '../../services';
import {ConversationUser} from '../../interface/ConversationUser';
import {UserService} from '../../services/user.service';
import { Message } from '../../interface/Message';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {
  @ViewChild('f') form: any;
  messages: Message[] = [];
  toUser: ConversationUser;
  enteredMessage: string;

  constructor(private socketService: SocketService) { }
  ngOnInit() {
    this.receiveMessages();
  }
  receiveMessages() {
    this.socketService.receiveMessages()
      .subscribe(message =>  {
        if (message.fromUserId) {
          this.messages.push(message);
        }
      });
  }
  startConversation(toUser) {
    this.toUser = toUser;
    this.loadConversation(this.toUser);
  }
  loadConversation(toUser) {
    this.messages = this.messages.filter(m => (m.fromUserId === toUser._id));
  }
  sendMessage() {
    const message = this.createMessage(this.enteredMessage);
    this.socketService.sendMessage(message);
    this.messages.push(message);
    this.form.reset();
  }

  createMessage(content): Message {
    return {
      fromUserId: '',
      message: content,
      toUserId: this.toUser._id,
      time: new Date()
    };
  }
  isOwnMessage(msgParam: Message): boolean {
    if (this.toUser) {
      return msgParam.toUserId === this.toUser._id;
    }
    return false;
  }
}
