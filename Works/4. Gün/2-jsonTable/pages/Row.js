import React, { Component } from 'react'
import { Text, View,Image, StyleSheet, TouchableHighlight,Alert} from 'react-native'

const itemRow = ( { item , navigation } ) => {
    const {  productName, images  } = item
    return (
        <TouchableHighlight onPress={ () => navigation('Detail', { data : item }) }>
        <View style={ style.rowHeader }>
            <View>
                <Image style={ style.rowImage } source = {{ uri : images[0].normal }}></Image>
            </View>
            <Text style={ style.rowTitle } >{productName}</Text>
        </View>
        </TouchableHighlight>
    )
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
    }


});
export default itemRow;