/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox, Animated, Easing } from 'react-native';
import {StackNavigator} from 'react-navigation';

import Anasayfa from './src/pages/Anasayfa';
import Paylasimlar from './src/pages/Paylasimlar';
import Urunler from './src/pages/Urunler';


const AppNavigator = StackNavigator ({
  Anasayfa : { screen: Anasayfa },
  Paylasimlar : { screen: Paylasimlar },
  Urunler : { screen: Urunler },
}, {
  initialRouteName : 'Anasayfa',
}
);



export default class App extends React.Component {

  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}
