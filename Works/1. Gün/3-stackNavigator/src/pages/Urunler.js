import React, { Component } from 'react';
import {
    View,
  Button,Text, TouchableOpacity
} from 'react-native';

export default class Urunler extends React.Component {

    goForward = () => {
        //const screenNumber = this.props.navigation.state.params ? this.props.navigation.state.params.screenNumber : 0
        //const params = { screenNumber: screenNumber + 1 }
        //if (Math.random() > .75) params.plain = true
        this.props.navigation.navigate('Urunler', { baslik: 'Ürünlerr' })
      }

    static navigationOptions = {
        title : 'Ürünler',
        headerBackTitle : 'Geri',
    }

    render () {
        const title = this.props.navigation.state.params.baslik;
        const { navigate } = this.props.navigation;

        return (
            <View style= {{ flex:1, justifyContent: 'center', }}>
                <Text style= {{ textAlign: 'center' }}>{title}</Text>
                <Button title='Paylaşımları Aç'
                onPress = { () => navigate('Paylasimlar', { baslik: 'Paylaşımlar' }) }
                ></Button>
                
                <Button title='Urunler Tekrar Aç'
                onPress = { () => navigate('Urunler', { baslik: 'Urunlerrr' }) }
                ></Button>

            </View>
        );
    }


}