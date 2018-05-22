import { IAppState, initialState, IPostAppState, initialPostState } from './state';
import { ADD_USER, SET_USER, RESET_USER, LOG_IN } from './userActions';
import { RECENT_POST, POST_COMMENTS } from './postActions';

function recentPosts(state, action): IPostAppState {
  return Object.assign({}, state,
    {
      ...state,
      recentPosts: [...action.data]
    });
}

function postComments(state, action): any {
  return state;

  // return state.map(post => (post._id === action.data._id) ? { ...post, comments: action.data.comments } : post);

  // const index = state.recentPosts.findIndex(post => post._id === action.data._id);

  // const updatedPosts = [
  //    ...state.recentPosts.slice(0, index), // everything before current post
  //    {
  //       ...state.recentPosts[index],
  //       comments: action.data.comments,
  //    },
  //    ...state.recentPosts.slice(index + 1), // everything after current post
  // ];

  // return Object.assign({}, state,
  //   {
  //     ...state,
  //     recentPosts: updatedPosts
  //   });
}

export default function userReducer(state: IPostAppState = initialPostState, action): IPostAppState {
  switch (action.type) {
    case RECENT_POST:
      return recentPosts(state, action);
    case POST_COMMENTS:
      return postComments(state, action);
    default:
      return state;
  }
}
