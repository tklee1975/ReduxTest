/** @format */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

// testing the Pure RN App
//import App from './App';
//AppRegistry.registerComponent(appName, () => App);

// Testing Pure Redux App
// import TestReduxApp from './app/redux/TestReduxApp';
// AppRegistry.registerComponent(appName, () => TestReduxApp);

// Testing React Navigation
import TestNavApp from './app/nav/TestNavApp';
AppRegistry.registerComponent(appName, () => TestNavApp);
