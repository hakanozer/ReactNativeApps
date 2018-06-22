/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Alert,
  View, AsyncStorage, Button
} from 'react-native';


export default class App extends Component {

  state = {
    kulid : ''
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // kurucu methotdan sonra çalışır
    this.loginControl();
  }

  async register(key, val) {
    try {
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      console.log(error)
    }
  }


  async userDelete() {
    try {
      await AsyncStorage.removeItem("kulid");
    } catch (error) {
      console.log(error)
    }
  }

  async loginControl() {
    try {
      var session = await AsyncStorage.getItem("kulid");
      if(session != null) {
        Alert.alert("Daha Önce Giriş Yapılmış : " + session);
      }else {
        Alert.alert("Kayıt Olmanız Gerekmekte !");
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
        title = "Kayıt Yap"
        onPress = { () => this.register("kulid","10") }
        ></Button>

        <Button
        title = "Kullanıcı Sil"
        onPress = {  this.userDelete }
        ></Button>

      </View>
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
