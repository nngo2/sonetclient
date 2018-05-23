import { Component, OnInit } from '@angular/core';
import {ConnectionsService} from '../../services/connections.service';
import {ConversationUser} from '../../interface/ConversationUser';
import {AuthService} from '../../services';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {
  searchStr = '';
  searchResult: ConversationUser[] = [];
  userFriends: ConversationUser[] = [];
  constructor(private connectionService: ConnectionsService, private authService: AuthService) {}

  ngOnInit() {
    this.getFriendList();
    this.searchForFriends();
  }
  searchForFriends() {
    this.connectionService.findUsers(this.searchStr, 0, 1000)
      .subscribe((response) => {
        this.searchResult = response.json();
      });
  }
  addFriend(user) {
    const currentUserId = this.authService.getCurrentUser()._id;
    this.connectionService.addFriend(currentUserId, user._id)
      .subscribe((res) => {
        this.userFriends.push(user);
      });
  }
  getFriendList() {
    const currentUserId = this.authService.getCurrentUser()._id;
    if (currentUserId) {
      this.connectionService.getFriendList(currentUserId)
        .subscribe((res) => {
          this.userFriends = res.json();
        });
    }
  }
  isFriend(userId) {
    return this.userFriends.map(user => (user._id))
      .filter(id => id === userId).length > 0;
  }
}
