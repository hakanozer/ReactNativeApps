/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert, ScrollView
} from 'react-native';
import Header from './src/components/header'


export default class App extends React.Component {


  returnView () {
    return (
      <View>
        <Text>Fonksiyon Text Bilgisi !</Text>
      </View>
    );
  }

  state = {
    title: 'Uyarı Tıkla !',
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header/>
        {this.returnView()}
        <Text style={styles.title}>Merhaba React Native !</Text>
        <Text style={  { color: 'black', }}>Re act Açıklama</Text>
        <Button title={this.state.title} onPress={ () => Alert.alert("Uyarı Açıldı !") } ></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title : {
    color : 'red',
  }
});
