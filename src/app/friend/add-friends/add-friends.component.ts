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
  constructor(private connectionService: ConnectionsService, private authService: AuthService) {}

  ngOnInit() {
  }
  searchForFriends() {
    this.connectionService.findUsers(this.searchStr, 0, 1000)
      .subscribe((response) => {
        this.searchResult = response.json();
      });
  }
  addFriend(friendId) {
    const currentUserId = this.authService.getCurrentUser()._id;
    this.connectionService.addFriend(currentUserId, friendId)
      .subscribe((res) => { });
  }

}
