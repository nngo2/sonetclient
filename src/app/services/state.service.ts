import { Injectable } from '@angular/core';
import { IUser } from '../store';

@Injectable()
export class StateService {
  _currentUser: IUser;

  get currentUser() {
    return this._currentUser;
  }

  set currentUser(value) {
    this._currentUser = value;
  }

  constructor() { }
}
