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



export default class App extends Component {
  render() {
    return (
      <View style = {styles.page}>
      <View style= {styles.top}>
        <View style = {styles.container}>
          <View style={styles.box}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
        </View>

         <View style = {styles.containerOther}>
          <View style={styles.box}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
        </View>
        </View>

        <View style = {styles.containerOther1}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex : 1,
    marginTop: 21,
  },
  container : {
    flex : 1,
    flexDirection: 'row', // kutuları satır halinde göster
    backgroundColor : 'gray',
  },
  containerOther : {
    flex : 1,
    flexDirection: 'row',
    backgroundColor : 'yellow',
  },

  containerOther1 : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  top :{
    flexDirection: 'row',
    backgroundColor : 'blue',
  } ,
  box :{
    flex:3,
    width : 75,
    height : 75,
    backgroundColor: 'red',
    margin: 10,
  },
  box1 :{
    flex:1,
    width : 75,
    height : 75,
    backgroundColor: 'red',
    margin: 10,
  },
  box2 :{
    width : 75,
    height : 75,
    backgroundColor: 'red',
    margin: 10,
  }
});
