import { Component, OnInit } from '@angular/core';
import { UserService, StateService } from '../../services';
import { Observable } from 'rxjs/internal/Observable';
import { IAppState, IUser, store } from '../../store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: IUser = {
    id: '',
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    email: ''
  };

  constructor(private _userService: UserService, private _stateService: StateService) { }

  ngOnInit() {
    this.setUserData();
  }

  setUserData() {
    console.log(store.getState().user);
    this.user = store.getState().user;
    // const u: IUser = this._stateService.currentUser;
    // this.user.id = u.id;
    // this.user.firstName = u.firstName;
    // this.user.lastName = u.lastName;
    // this.user.email = u.email;
    // this.user.login = u.login;
    // this.user.password = u.password;
  }

  onSubmit(f) {
    if (f.valid) {
      console.dir(f.value);
      // this._userService.createUser(f.value).subscribe(
      //   data => console.dir(data),
      //   err => Observable.throw(err)
      // );
    }
  }

}
