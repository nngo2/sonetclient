import { createStore, compose, StoreEnhancer } from 'redux';
import { IAppState } from './state';
import reducer from './reducer';

const devtools: StoreEnhancer<any> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

// export const store = createStore(reducer);
// export const store = createStore<any>(reducer);
export const store = createStore(reducer, compose(devtools));
