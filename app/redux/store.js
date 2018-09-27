import {createStore, compose} from 'redux';
import rootReducer from './reducers/rootReducer';      // No yet

const enhancerList = [];    // ??

const composedEnhancer = compose(...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);
//const initStore = () => createStore(composedEnhancer);      // Bug !! cannot be nothing

module.exports = {
  initStore
};
