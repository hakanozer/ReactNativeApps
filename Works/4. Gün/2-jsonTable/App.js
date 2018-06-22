/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Liste from './pages/Liste';
import Detail from './pages/Detail';

const Navigate = StackNavigator({
  Liste: { screen: Liste },
  Detail: { screen: Detail },
});

export default class App extends Component {

  constructor(props) {
    super(props); YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      ]);
  }

  render() {
    return (
      <Navigate/>
    );
  }
}
