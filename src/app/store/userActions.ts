import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './state';

export const LIST_USER = 'LIST_USER';
export const ADD_USER = 'ADD_USER';
export const SET_USER = 'SET_USER';

@Injectable()
export class UserActions {

    constructor(private ngRedux: NgRedux<IAppState>) { }

    listUserAction(users) {
        this.ngRedux.dispatch({
            type: LIST_USER,
            data: users
        });
    }

    addUserAction(user) {
        this.ngRedux.dispatch({
            type: ADD_USER,
            data: user
        });
    }

    setUserAction(user) {
        this.ngRedux.dispatch({
            type: SET_USER,
            data: user
        });
    }
}
