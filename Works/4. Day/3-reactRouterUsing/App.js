/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,Dimensions,
  View, Button
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Home from './pages/home';
import Contact from './pages/contact';


const FirstRoute = ( { history } ) => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
      <Button title = "Contact Aç" onPress={ () =>  history.push( { pathname: '/contact', state :"ali"  })  } ></Button>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class App extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/contact' component={Contact} ></Route>
      </Switch>
    </NativeRouter>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
