import { IAppState, initialState } from './state';
import { ADD_USER, SET_USER, RESET_USER } from './userActions';

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

function resetUser(state, action): IAppState {
  return Object.assign({}, state,
    {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        login: '',
        password: '',
        email: ''
      }
    });
}

export default function userReducer(state: IAppState = initialState, action): IAppState {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case SET_USER:
      return setUser(state, action);
    case RESET_USER:
      return resetUser(state, action);
    default:
      return state;
  }
}
