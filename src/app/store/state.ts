import { IUser } from './user';
import { IPost } from './post';

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

export interface IPostAppState {
    recentPosts: IPost[];
}

export const initialPostState: IPostAppState = {
    recentPosts: []
};
