import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './state';

export const LOG_IN = 'LOG_IN';
export const ADD_USER = 'ADD_USER';
export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

@Injectable()
export class UserActions {

    constructor(private ngRedux: NgRedux<IAppState>) { }

    loginUserAction(val) {
        this.ngRedux.dispatch({
            type: LOG_IN,
            data: val
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

    resetUserAction() {
        this.ngRedux.dispatch({
            type: RESET_USER
        });
    }
}
