import { IAppState, initialState } from './state';
import { UserActions, LIST_USER, ADD_USER, SET_USER } from './userActions';

function listUsers(state, action): IAppState {
  return Object.assign({}, state,
    {
      users: action.data
    });
}

function addUser(state, action): IAppState {
  return Object.assign({}, state,
    {
      user: action.data
    });
}

function setUser(state, action): IAppState {
  return Object.assign({}, state,
    {
      user: {
        id: action.data.id,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        login: action.data.login,
        password: action.data.password,
        email: action.data.email
      }
    });
}

export function UserReducer(state: IAppState = initialState, action) {
  switch (action.type) {
    case LIST_USER:
      return listUsers(state, action);
    case ADD_USER:
      return addUser(state, action);
    case SET_USER:
      return setUser(state, action);
    default:
      return state;
  }
}
