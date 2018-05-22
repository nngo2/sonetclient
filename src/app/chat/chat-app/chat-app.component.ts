import {Component, OnInit, ViewChild} from '@angular/core';
import {ConversationUser} from '../../interface/ConversationUser';
import {PrivateChatComponent} from '../private-chat/private-chat.component';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {
  @ViewChild(PrivateChatComponent) privateChatComponent: PrivateChatComponent;
  constructor() { }

  ngOnInit() {
  }

  selectUser(user: ConversationUser) {
    this.privateChatComponent.startConversation(user);
  }

}
