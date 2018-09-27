/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {initStore} from './store';
import {Provider} from 'react-redux';

import AppMain from './TestRedux';

const store = initStore();
//const store = {};     // this will be bug!

export default class TestReduxApp extends React.Component {
  render () {
    return (      
      <Provider store={store}>
        <AppMain/>
      </Provider>
    );
  }
}
