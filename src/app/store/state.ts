import { IUser } from './user';

export interface IAppState {
    user: IUser;
    login: boolean;
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
    user: emptyUser,
    login: false
};
