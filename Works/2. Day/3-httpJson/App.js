/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './pages/login'
import Register from './pages/register'

const Navigate = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
});

export default class App extends Component {
  render() {
    return (
      <Navigate/>
    );
  }
}

