import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Login from './screens/loginscreen';
import Home from './screens/homescreen';
import Doc from './screens/Docscreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// You can import from local files

// or any pure javascript modules available in npm

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator=createSwitchNavigator({
  Home:Home,
  Doc:Doc,

})
const AppContainer=createAppContainer(AppNavigator)