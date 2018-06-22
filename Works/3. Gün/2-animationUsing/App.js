/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, Animated, Easing
} from 'react-native';



export default class App extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
        easing : Easing.circle
      }
    ).start();                        // Starts the animation
  }

  render() {    
    let { fadeAnim } = this.state;
    return (
      <View style={styles.container}>
      
        <Animated.Image style={{ opacity: fadeAnim, }} source={ require("./resim.png") } >
        </Animated.Image>

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
  }
});
