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
    this.user = store.getState().user.user;
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
