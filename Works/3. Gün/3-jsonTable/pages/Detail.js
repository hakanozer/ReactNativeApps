import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, WebView } from 'react-native'

export default class Detail extends Component {

  item = null
  constructor(props) {
      super(props)
      item = this.props.navigation.state.params.data
      this.props.navigation.setParams({ title: item.productName })
  }




    static navigationOptions = ({ navigation }) => ({
        title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'find': navigation.state.params.title,
        headerBackTitle : 'Geri',
    })

  render() {

    return (
      <ScrollView>
        <Image source={{ uri : item.images[0].normal }} style={style.rowImage}  ></Image>
        <Text>{item.productName}</Text>
        
        <WebView 
         style={style.WebViewStyle}  
         javaScriptEnabled={true}
         domStorageEnabled={true}
         source={{ html: item.description }}
         />


      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
    rowHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor : '#b7b7b7',
        borderRadius: 5,
    },

    rowImage : {
        height : 300,
        width: null,
        flex: 1,
    },
    rowTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    height : 300,
    }


});