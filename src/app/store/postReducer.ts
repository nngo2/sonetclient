import { IAppState, initialState, IPostAppState, initialPostState } from './state';
import { ADD_USER, SET_USER, RESET_USER, LOG_IN } from './userActions';
import { RECENT_POST } from './postActions';

function recentPosts(state, action): IPostAppState {
  return Object.assign({}, state,
    {
      ...state,
      recentPosts: [...action.data]
    });
}

export default function userReducer(state: IPostAppState = initialPostState, action): IPostAppState {
  switch (action.type) {
    case RECENT_POST:
      return recentPosts(state, action);
    default:
      return state;
  }
}
