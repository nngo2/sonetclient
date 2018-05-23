import { Component, OnInit } from '@angular/core';
import {ConnectionsService} from '../../services/connections.service';
import {ConversationUser} from '../../interface/ConversationUser';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../store/user';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit {
  friends: ConversationUser[] = [];
  currentUser: IUser;
  constructor(private connectionService: ConnectionsService, private authService: AuthService) { }

  ngOnInit() {
    this.loadFriendList();
  }
  loadFriendList() {
   this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser && this.currentUser._id) {
      this.connectionService.getFriendList(this.currentUser._id)
        .subscribe((res) => {
            this.friends = res.json();
        });
    }
  }
  addFriend(friend) {
    if (this.currentUser && this.currentUser._id) {
      this.connectionService.addFriend(this.currentUser._id, friend._id)
        .subscribe((data) => {
          this.friends.push(friend);
        });
    }
  }

}
