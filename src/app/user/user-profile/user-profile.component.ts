import { Component, OnInit } from '@angular/core';
import { UserService, StateService } from '../../services';
import { Observable } from 'rxjs/internal/Observable';
import { IAppState, IUser, store, UserActions } from '../../store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  message: string;
  user: IUser = {
    _id: '',
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    email: ''
  };

  constructor(private userService: UserService, private userActions: UserActions) { }

  ngOnInit() {
    this.message = '';
    this.setUserData();
  }

  setUserData() {
    this.user = store.getState().user.user;
  }

  onSubmit(f) {
    if (f.valid) {
      console.dir(f.value);
      this.userService.updateUser(f.value).subscribe(
        data => {
          console.dir(data);
          this.message = 'Profile has been updated';
          this.userActions.setUserAction(data.json());
        },
        err => {
          this.message = err;
          Observable.throw(err);
        }
      );
    }
  }

}
