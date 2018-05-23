import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services';
import {ConversationUser} from '../../interface/ConversationUser';
import {ConnectionsService} from '../../services/connections.service';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnDestroy {
  @Output()
  userSelection: EventEmitter<ConversationUser> = new EventEmitter<ConversationUser>();
  friendList: ConversationUser[] = [];
  selectedUser: ConversationUser;
  intervalId: any;
  constructor(private connectionService: ConnectionsService,
              private authService: AuthService,
              private socketService: SocketService) {
  }
  ngOnInit() {
    this.handleIncomingMessages();
    this.loadFriendList();
    this.intervalId = setInterval(() => {this.loadFriendList(); }, 10000);
  }
  handleIncomingMessages() {
    this.socketService.receiveMessages()
      .subscribe(message =>  {
        if (message.fromUserId && this.selectedUser && this.selectedUser._id !== message.fromUserId) {
          for (const u of this.friendList) {
            if (u._id === message.fromUserId) {
              this.selectUser(u);
            }
          }
        }
      });
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  loadFriendList() {
    const currentUserId = this.authService.getCurrentUser()._id;
    if (currentUserId) {
      this.connectionService.getFriendList(currentUserId)
        .subscribe((res) => {
          console.log(res.json());
          this.friendList = res.json();
        });
    }
  }
  selectUser(user: ConversationUser) {
    if (user.status && user.status.isOnline) {
      this.userSelection.emit(user);
    }
    this.selectedUser = user;
  }
  isUserSelected(id) {
    return this.selectedUser && id === this.selectedUser._id;
  }
}
