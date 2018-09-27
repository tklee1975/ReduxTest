import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
        // note: import {HomeScreen} and import HomeScreen are difference!!!
import DetailScreen from '../screen/DetailScreen';
import MoreDetailScreen from '../screen/MoreDetailScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,           // routeName: React Comp
        Detail: DetailScreen,
        MoreDetail: MoreDetailScreen
    },
    {
        initialRouteName: 'Home'
    }
  );


export default class TestNavApp extends React.Component {
    render() {
        return (
             <RootStack/>            
        );
    }
}

// // The following is for debugging single Screen  
// export default class TestNavApp extends React.Component {
//     render() {
//         return (
//              <HomeScreen/>            
//         );
//     }
// }