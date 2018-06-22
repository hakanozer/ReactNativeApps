import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Platform
} from 'react-native';

export default class Header extends React.Component {
    
    render() {
        return (
          <View style={stle.header}>
            <Text>Uygulama Başlığı</Text>
          </View>  
        );
    };
}

const stle = StyleSheet.create({
    header : {
        marginTop: Platform.OS == 'ios' ? 21 : 0,
        height : 100,
        backgroundColor : 'red',
        justifyContent: 'center'
    }
})

