import React, { Component } from 'react';
import {
    View,Text,Button
} from 'react-native';

export default class Anasayfa extends React.Component {

    static navigationOptions = {
        title : 'Ana Sayfa',
        headerBackTitle : 'Geri',
    }

    render () {

        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Anasayfa</Text>
                <View>
                    <Button title = "Ürün Sayfasını Aç"
                    onPress = { () => navigate('Urunler', { baslik: 'Ürünler' }) }
                    ></Button>
                </View>
            </View>
        );
    }


}


