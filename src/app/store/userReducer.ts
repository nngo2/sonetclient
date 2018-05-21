import { IAppState, initialState } from './state';
import { ADD_USER, SET_USER } from './userActions';

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
        id: action.data._id,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        login: action.data.login,
        password: action.data.password,
        email: action.data.email
      }
    });
}

export default function userReducer(state: IAppState = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case SET_USER:
      return setUser(state, action);
    default:
      return state;
  }
}
