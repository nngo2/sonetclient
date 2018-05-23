import {Component, OnInit, ViewChild} from '@angular/core';
import {ConversationUser} from '../../interface/ConversationUser';
import {PrivateChatComponent} from '../private-chat/private-chat.component';
import {AuthService} from '../../services/auth.service';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {
  @ViewChild(PrivateChatComponent) privateChatComponent: PrivateChatComponent;
  constructor(private socketService: SocketService,
              private authService: AuthService) { }

  ngOnInit() {
    this.initSocket();
  }
  initSocket() {
    const currentUser = this.authService.getCurrentUser();
    if (!this.socketService.isSocketAvailable() && currentUser && currentUser._id) {
      this.socketService.initSocket(currentUser._id);
    }
  }

  selectUser(user: ConversationUser) {
    this.privateChatComponent.startConversation(user);
  }

}
