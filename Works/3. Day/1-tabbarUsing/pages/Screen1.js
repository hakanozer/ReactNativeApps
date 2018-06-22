
import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Styles from './css'

export default class Screen1 extends Component {

  constructor(props) {
      super(props)
      console.warn("Screen1 çalıştı")
  }

  componentWillMount() {
    console.warn("componentWillMount çalıştı")
  }

  componentDidMount() {
    console.warn("componentDidMount çalıştı")
  }

  render() {
    return (
      <View style={ Styles.container}>
        <Text style={{fontFamily: 'Roboto' }}> Screen1 </Text>
      </View>
    )
  }
}


