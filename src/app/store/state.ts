import { IUser } from './user';
import { LIST_USER } from './userActions';

export interface IAppState {
    users: IUser[];
    user: IUser;
}

export const emptyUser: IUser = {
    id: '',
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    email: ''
};

export const initialState: IAppState = {
    users: [],
    user: emptyUser
};
