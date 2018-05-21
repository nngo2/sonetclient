import { IUser } from './user';

export interface IAppState {
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
    user: emptyUser
};
