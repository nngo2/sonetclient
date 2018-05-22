import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import {StateService} from '../../services';
import {ConversationUser} from '../../interface/ConversationUser';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnDestroy {
  @Output()
  userSelection: EventEmitter<string> = new EventEmitter<string>();
  onlineUsers: ConversationUser[] = [];
  selectedUser: ConversationUser;
  intervalId: any;
  constructor(private stateService: StateService,
              private userService: UserService) {
  }
  ngOnInit() {
    this.getOnlineUsers();
    this.intervalId = setInterval(() => {this.getOnlineUsers(); }, 5000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  getOnlineUsers() {
    this.userService.findOnlineUsers()
      .subscribe((data) => {this.onlineUsers = data.json(); console.log(data.json()); });
  }
  selectUser(user) {
    this.userSelection.emit(user);
    this.selectedUser = user;
  }
  isUserSelected(id) {
    return this.selectedUser && id === this.selectedUser._id;
  }
}
