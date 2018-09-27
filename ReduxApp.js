/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {initStore} from './app/redux/store';
import {Provider} from 'react-redux';

import AppMain from './app/AppMain';

const store = initStore();
//const store = {};     // this will be bug!

export default class ReduxApp extends React.Component {
  render () {
    return (      
      <Provider store={store}>
        <AppMain/>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
