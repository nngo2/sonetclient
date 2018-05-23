import { createStore, compose, StoreEnhancer, applyMiddleware } from 'redux';
import { IAppState, initialState, initialPostState } from './state';
import reducer from './reducer';

const devtools: StoreEnhancer<any> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

function middlewareFactory(errHandler) {
  return function (rdstore) {
    return function (next) {
      return function (action) {
        try {
          return next(action);
        } catch (err) {
          errHandler(err, rdstore.getState, action, rdstore.dispatch);
          return err;
        }
      };
    };
  };
}

function errorHandler(error, getState, lastAction, dispatch) {
  console.log(error);
  console.log('current state', getState());
  console.log('last action was', lastAction);
}

// export const store = createStore(reducer);
// export const store = createStore<any>(reducer);
export const store = createStore(reducer, {user: initialState, posts: initialPostState}, compose(devtools));
// export const store = createStore(reducer, applyMiddleware(middlewareFactory(errorHandler)));
