import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
      <Button title = "Contact Aç" onPress={ () =>  this.props.history.push( { pathname: '/contact', state : "Ali"  })  } ></Button>
  </View>
      </View>
    )
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